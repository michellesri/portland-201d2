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

var clickTheButton = document.getElementById('cuteLittleButton');

//eventListener and function for click event to add to ul
clickTheButton.addEventListener("click", function() {
  var userInput = document.getElementById("textBox").value;
  addLi("myList", userInput);
}
);

//blur is opposite of focus (tab away)
clickTheButton.addEventListener("blur", function() {
  var userInput = document.getElementById("textBox").value;
  addLi('listTwo', userInput);
}
);

//blur is opposite of focus (tab away)
clickTheButton.addEventListener('focus', function() {
  console.log('focus event occured');
});
