function gebi(id) { return document.getElementById(id); }
var txt = gebi('txt');
var out = gebi('out');

if (localStorage['txt']) {
  var dat = localStorage['txt'];
  txt.value       = dat;
  out.textContent = dat;
}
else { out.textContent = 'hello!'; }

txt.addEventListener('input', function() {
  var v = txt.value;
  localStorage['txt'] = v;
  out.textContent     = v;
});

// Canvas context test
var c = gebi('c');

var ctx = c.getContext('2d');
console.log('ctx = ' + ctx);

var ctx2 = c.getContext('2d');
console.log('ctx2 = ' + ctx2);

