/************************************
        Functions to debug
************************************/
var print = function (id, message){
  var target = document.getElementById(id);
  target.innerHTML = message;
};

function makeGreen(id){
  var x = document.getElementById(id).setAttribute('style','color: green;');
}

function isUndefined(thing){
  if(thing = undefined){
    return "Totally undefined";
  }else{
    return "Not Undefined";
  }
}
