#include <stdlib.h>
#include <string>
#include <iostream>
#include <sstream>
using namespace std;

string challenge(int data) {
  //ここに素数判定プログラムを実装してください。
  //BEGIN_CHALLENGE
  //Implement the challenge here to check whether the tests are correct
  ostringstream oss;
  oss<< data;
  return oss.str();
  //END_CHALLENGE
}

int main(int argc, char *argv[])
{
  if (argc != 2) {
    cout << "usage: ./a.out <number>\n";
    return 1;
  }
  int arg1 = atoi(argv[1]);
  cout << challenge(arg1);
  return 0;
}