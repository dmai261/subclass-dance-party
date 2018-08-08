var MakeMovingDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="movingDancer"></span>');
  this.setPosition(top, left);
};

MakeMovingDancer.prototype = Object.create(MakeDancer.prototype);
MakeMovingDancer.prototype.constructor = MakeMovingDancer;  
