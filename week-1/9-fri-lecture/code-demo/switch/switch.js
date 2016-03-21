var myPara = document.getElementById('myPara');

var inc = prompt('Enter your income:');
var t1 = 5000;
var t2 = 12000;
var t3 = 100000;
switch (true)
{

case (inc < t1):
  myPara.innerHTML = 'You typed \'a\' for apple.';
  console.log('case a');
  break;

case (inc < t2):
  myPara.innerHTML = 'You typed \'b\' for bird.';
  console.log('case b');
  break;

case (inc < t3):
  console.log('case z');
  myPara.innerHTML = 'You typed \'z\' Blaah.';
  var x = prompt('Click something.');
  break;

default:
  console.log('default case');
  break;
}

console.log('all cases end up here');
