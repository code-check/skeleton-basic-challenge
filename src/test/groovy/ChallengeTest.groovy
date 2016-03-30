import spock.lang.Specification
import spock.lang.Unroll

class Test1Spec extends Specification {

  @Unroll
  def "Challenge(#data) == #data"() {
    setup:
    def challenge = new Challenge()

    expect:
      challenge.Challenge(1) == 1
  }
}