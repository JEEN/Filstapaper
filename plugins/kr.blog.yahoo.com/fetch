use LWP::UserAgent;
use Encode;

sub fetch {
   my ($self, $uri) = @_;

   my $ua = LWP::UserAgent->new;

   my $res1 = $ua->get($uri);
   my $r = $res1->decoded_content;
   Encode::encode_utf8($r);
}
