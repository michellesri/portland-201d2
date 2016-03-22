var monitor = {};
var hulk = {};

monitor.smash = function(name) { console.log('Please smash ' + name); };
hulk.smash = function() { console.log('SMASH TANKS!'); };

var color = 'red';
hulk.color = 'green';
hulk.printColor = function() {
  console.log('HULK\'s color is ' + this.color);
};

function callSmash(myObj, someArg) {
  myObj.smash(someArg);
}

callSmash(hulk);
callSmash(monitor, 'Jan');
callSmash(monitor);

function SuperHero(name, power, canFly) {
  this.name = name;
  this.power = power;
  this.canFly = canFly;
  this.fly = function() {
    if (this.canFly)
      console.log(this.name + ' says: \"I\'m flying!\"');
    else
      console.log(this.name + ' says: \"One moment -- I\'ll get my jet.\"');
  };
}

var WonderWoman = new SuperHero('Wonder Woman', 'super strong', false);
var FireStar    = new SuperHero('Fire Star',    'shoots fire',  true);

WonderWoman.fly();
FireStar.fly();

