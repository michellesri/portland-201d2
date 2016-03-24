console.log('start');
function addLi (a,b){
  var newItem = document.createElement('li');
  var newText = document.createTextNode(b);
  newItem.appendChild(newText);
  var newItem2 = document.getElementById(a);
  newItem2.appendChild(newItem);
};

addLi ('myList','bowl');
addLi ('myList', 'pizza');
addLi ('listTwo','elephant');
addLi ('listTwo','giraffe');

var removeEl = document.getElementById('pRemove');
var containerEl = removeEl.parentNode;
containerEl.removeChild(removeEl);
