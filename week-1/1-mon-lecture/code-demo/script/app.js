var leftPocket  = 8.85;
var rightPocket = 3.49;

function add(a, b) {
    var c = a + b;
    return c;
}

var totalChange = add(leftPocket, rightPocket);

var output = document.getElementById('output');
output.textContent = 'totalChange = $' + totalChange;
