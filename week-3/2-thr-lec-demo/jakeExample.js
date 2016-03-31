//Jake's super simple example to set//recall localStorage properties

var arr = [];
my = {};
my.a = 1;
my.b = 2;

me = {};
me.c = 3;
me.d = 4;

var jake = [my, me];

function setLocal(key, thingToStore){
  var temp = JSON.stringify(thingToStore);
  localStorage[key] = temp;

}
function getLocal(key){
  var temp = localStorage[key];
  return JSON.parse(temp);
}

setLocal('arrOfObj', jake);
console.log(getLocal('arrOfObj'));
arr = getLocal('arrOfObj');
console.log(arr);
console.log(arr[0].a);

// var a = 10;
// var b = 12;
//
// function addThings(x,y){
//   return parseInt(x + y);
// }
//
// if (localStorage['total']){
//   console.log("We have it! It's value is " + localStorage['total']);
//   var update = localStorage['total'];
//   update = parseInt(update) + 10
//   localStorage['total'] = update;
//   console.log("New localstorage value is: " + localStorage['total']);
// } else{
//   console.log("We don't have it! Updating Local Storage!");
//   localStorage['total'] = addThings(a,b);
//   console.log("Updated.");
//
// }
