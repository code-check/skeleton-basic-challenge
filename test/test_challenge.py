from nose.tools import assert_equal

from app.challenge import challenge

def test_challenge():
  assert_equal(challenge(1), 1)