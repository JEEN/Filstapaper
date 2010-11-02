package Filstapaper;
use Dancer;
use URI;
use URI::Escape;
use Try::Tiny;
use LWP::Simple ();

get '/' => sub {
    template 'index', { supports => config->{supports} };
};

get qr{ '/barcode/(.+)' } => sub {
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

get qr{/imgprx/(.+)} => sub {
  my ($u) = splat;
  my $param = params;

  $u = "http://" . $u;
  my $uri = URI->new(uri_unescape($u));
  delete $param->{splat};
  if ($param) {
    $uri->query_form($param);
  }
  my $content = LWP::Simple::get($uri);
  content_type 'image/jpeg';
  headers 'Content-Length' => length($content), 'Accept-Ranges' => 'bytes';
  $content;
};

get qr{/filter/(.+)} => sub {
    my ($u) = splat;
    my $param = params;

    $u = "http://" . $u;    
    my $uri = URI->new(uri_unescape($u));
    delete $param->{splat};
    if ($param) {
	$uri->query_form($param);
    }
    my $content; 
    try {
	my $plugin = load_plugin($uri->host);
        $content = $plugin->fetch($uri);  
    } catch {
	redirect $uri, 301;
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
