use LWP::UserAgent;
use Encode ();
use Data::Dumper;
sub fetch {
   my ($self, $url) = @_;

   my $ua = LWP::UserAgent->new( agent => 'Mozilla/5.0 (X11; U; Linux i686; ja; rv:1.9b5) Gecko/2008050509 Firefox/3.0b5' );
   my ($author, $article);
   if ($url =~ /blog\.me/) {
     ($author, $article) = $url =~ m{http://([^\.]+)\.blog\.me/(\d+)};
   } else {
     my $r = $ua->get($url);
     my $c = $r->content;
     if ($c =~ /src=".+?blogId=([a-z0-9_]+).*?\&logNo=(\d+)/m) {
       $author = $1;
       $article = $2;
     } elsif ($c =~ /%2F([^%]+)%2F([^&]+)/) {
       $author = $1;
       $article = $2;
     }
   }
   my $u = sprintf 'http://blog.naver.com/PostView.nhn?blogId=%s&logNo=%s', $author, $article;
   my $r2 = $ua->get($u);
   my $content = $r2->decoded_content;
   $content =~ s/MS949/utf-8/;
   $content =~ s{http://postfiles}{http://app.perl.kr/filstapaper/imgprx/postfiles}g;
   $content = Encode::encode_utf8($content);
   $content;
}
