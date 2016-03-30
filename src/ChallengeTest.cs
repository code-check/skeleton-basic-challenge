using NUnit.Framework;
using System;

[TestFixture]
public class ChallengeTest
{
  [Test]
  public void Test_SolveChallenge()
  {
    Assert.AreEqual(1, Challenge.SolveChallenge(1));
  }
}