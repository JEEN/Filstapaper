package Filstapaper;
use Dancer;
use URI;
use URI::Escape;
use Try::Tiny;

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
    template 'barcode', { code => $param->{isbn} };
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
    my $plugin;
    my $is_redirect = 0;
    my $content; 
    try {
	$plugin = load_plugin($uri->host);
        $content = $plugin->fetch($uri);  
    } catch {
	redirect $uri;
   };
   $content;
};

# Inspired by Plagger::Plugin::Filter::FindEnclosures
# TODO : Change to preload Plugin Modules / or use Destructor?
sub load_plugin {
    my $host = shift;

    (my $pkg = $host) =~ tr/A-Za-z0-9_/_/c;

    my $loc = sprintf "plugins/%s/fetch", $host;
    die unless -f $loc;
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
