use LWP::UserAgent;

sub fetch {
   my ($self, $uri) = @_;

   my $ua = LWP::UserAgent->new;

   my $res1 = $ua->get($uri);
   my $r = $res1->content;
   my ($u) = $r =~ /id='club_iframe' src='([^']+)'/;
   return $r unless $u;
   my $res2 = $ua->get($u);    
   $res2->content;
}