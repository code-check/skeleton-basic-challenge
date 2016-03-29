package challenge
import "testing"

func TestChallenge(t *testing.T) {
  var actual int
  actual = challenge(1)

  if actual != 1 {
    t.Errorf("got %v\nwant %v", actual, 1)
  }

}