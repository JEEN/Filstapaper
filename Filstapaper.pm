package Filstapaper;
use Dancer;
use URI;
use URI::Escape;

get '/' => sub {
    template 'index';
};

get r( '/barcode/(.+)' ) => sub {
    my ($u) = splat;
    my $param = params;
    $u = 'http://'. $u;
    my $uri = URI->new(uri_unescape($u));
    delete $param->{splat};
    if ($param) { 
	$uri->query_form($param);
    }
    $uri;
};

get r( '/filter/(.+)' ) => sub {
    my ($u) = splat;
    my $param = params;

    $u = "http://" . $u;    
    my $uri = URI->new(uri_unescape($u));
    delete $param->{splat};
    if ($param) {
	$uri->query_form($param);
    }
    my $plugin = load_plugin($uri->host);
    my $content = $plugin->fetch($uri);
    $content;
};

# Inspired by Plagger::Plugin::Filter::FindEnclosures
# TODO : Change to preload Plugin Modules / or use Destructor?
sub load_plugin {
    my $host = shift;

    (my $pkg = $host) =~ tr/A-Za-z0-9_/_/c;

    my $loc = sprintf "plugins/%s/fetch", $host;
    $loc = "plugins/base/fetch" unless -f $loc;
    open my $fh, "<", $loc or die $!;
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
