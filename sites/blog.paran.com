use LWP::UserAgent;

sub fetch {
   my ($self, $url) = @_;

   my $ua = LWP::UserAgent->new;
   my $r = $ua->get($url);
   my $c = $r->content;
   my ($src) = $c =~ /id="Postframe" *src="([^"]+)"/;
   my $t = "http://blog.paran.com" . $src;
   my $r2 = $ua->get($t);
   my $content = $r2->content;
   $content;
}
