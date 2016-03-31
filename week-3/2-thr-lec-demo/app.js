function gebi(id) { return document.getElementById(id); }
var txt = gebi('txt');
var out = gebi('out');

if (localStorage['txt']) {
  var dat = localStorage['txt'];
  txt.value = dat;
  out.textContent = dat;
}
else { out.textContent = 'hello!'; }

txt.addEventListener('blur', function() {
  var v = txt.value;
  localStorage.txt = v;
  out.textContent = v;

  // Read-modify-write to update an "array" in localStorage
  var arr = localStorage.coolStuff.split(',');
  arr.push(v);
  localStorage.coolStuff = arr;
});

// JSON example for writing/reading a simple objects to/from localStorage
G = {};
G.pet = "Fido";
G.age = 30;
G.food = "lentils!";
JSON.stringify(G);
localStorage.G = JSON.stringify(G);
var G_reloaded = JSON.parse(localStorage.G)

localStorage.coolStuff = ['hat', 'gloves'];


// Canvas context test
var c = gebi('c');

var ctx = c.getContext('2d');
console.log('ctx = ' + ctx);

var ctx2 = c.getContext('2d');
console.log('ctx2 = ' + ctx2);
