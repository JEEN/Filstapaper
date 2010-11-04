package Filstapaper;
use Dancer;
use URI;
use URI::Escape;
use Try::Tiny;
use LWP::Simple ();
use YAML;

my $sites = YAML::LoadFile('sites.yaml');

get '/' => sub {
  template 'index', { supports => $sites->{supports} };
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
	  my $fetcher = load_fetcher($uri->host);
    $content = $fetcher->fetch($uri);  
  } catch {
    redirect $uri, 301;
  };
  $content;
};

sub get_alias_host {
  my $host = shift;

  while(my ($match,$alias) = each %{ $sites->{aliases} }) {
    return $alias if $host =~ /$match/;
  }
}

# Inspired by Plagger::Plugin::Filter::FindEnclosures
sub load_fetcher {
  my $host = shift;

  $host = get_alias_host($host) || $host;

  (my $pkg = $host) =~ tr/A-Za-z0-9_/_/c;
  my $loc = sprintf "sites/%s", $host;
  open my $fh, "<", $loc or die "Can't found host : $host";
  my $code = join '', <$fh>;
  my $class = "Filstapaper::Site::$pkg";
  # use Data::Simple::Section
  $code = join "\n", (
    "package $class;",
	  'use strict;',
	  'use warnings;',
    "no warnings qw(redefine);",
    "sub new { bless {}, shift }",
	  "sub host { '$host' }",
	  $code,
	  "1;" );
  eval $code;

  my $plugin = $class->new;
  $plugin;
};

true;
