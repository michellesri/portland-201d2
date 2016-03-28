exports = {};
/********************************************************
 * Example of TDD on a feature used in Week 1's labwork *
 ********************************************************/
var question = ['helloWorld'];

function getQuestion(index) {
  return (question[index]);
}

//exports refers to the "var app = require('../scrips/app.js');" in our test.js file. In other words its using the app.js as an object whose method is "getQuestion"
exports.getQuestion = getQuestion;


function cl(x){
  console.log(x);
  return x;
}
//cl("hey there, jake");
exports.cl = cl;

function returnThing (thing){
  return thing;
}

exports.returnThing = returnThing;
