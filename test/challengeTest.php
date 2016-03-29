<?php
require_once 'app/Challenge.php';
class ChallengeTest extends PHPUnit_Framework_TestCase
{
  function testIsDummy() { 
    $this->assertEquals(1, challenge(1));
  }
}