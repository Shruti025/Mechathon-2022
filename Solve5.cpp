#include <bits/stdc++.h>
using namespace std;

int main() {

  float d, force_1, force_2; cin >> d >> force_1 >> force_2;

  float pi = acos(-1);

  float Rd = ((force_1 * 100) + (force_2 * 100)) / 300.0;
  float Ra = force_1 + force_2;
  float Pab = Ra / sin(pi/3);
  float Pae = Pab * cos(pi/3);

  float Pcd = 360 / sin(pi/3);
  float Ped = Pcd * cos(pi/3);

  cout << "Reaction at A is " << Ra << '\n';
  cout << "Reaction at D is " << Rd << '\n';
  cout << "Tension in BD is " << Ped << '\n';
  
  return 0;
}