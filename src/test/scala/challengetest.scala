import org.scalatest._
import Challenge._

class TestChallengeSpec extends FlatSpec with Matchers {

  "dummy test1- solveChallenge" should " return value passed" in {
      assert(solveChallenge(1) === 1)     
  } 
}