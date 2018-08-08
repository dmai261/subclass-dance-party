var MakeSpinningDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="spinningDancer"></span>');
  this.setPosition(top, left);
};

MakeSpinningDancer.prototype = Object.create(MakeDancer.prototype);
MakeSpinningDancer.prototype.constructor = MakeSpinningDancer;  
MakeSpinningDancer.prototype.step = function() {
  MakeDancer.prototype.step.call(this);
  this.$node.toggle();
};