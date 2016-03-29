use strict;
use warnings;
use Test::More;
use app::Challenge;

challengeTest();

sub challengeTest {
  ok Challenge::challenge(1) eq 1;
}

done_testing;