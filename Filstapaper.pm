package Filstapaper;
use Dancer;
use URI;
use URI::Escape;

get '/' => sub {
    template 'index';
};

get r( '/filter/(.+)' ) => sub {
    my ($u) = splat;
    $u = "http://" . $u;    
    my $uri = URI->new(uri_unescape($u));
    my $plugin = load_plugin($uri->host);
    my $content = $plugin->fetch($uri);
    $content;
};

sub load_plugin {
    my $host = shift;

    (my $pkg = $host) =~ tr/A-Za-z0-9_/_/c;

    open my $fh, "<", "plugins/".$host."/fetch";
    my $code = join '', <$fh>;
    my $class = "Filstapaper::Site::$pkg";
    $code = join "\n", (
	"package $class;",
	'use strict;',
	'use warnings;',
        "no warnings qw(redefine);",
        "sub new { bless {}, shift }",
	"sub site_name { '$host' }",
	$code,
	"1;" );
    eval $code;

    my $plugin = $class->new;
    return $plugin;
}

true;
