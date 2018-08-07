var MakeBlinkyDancer = function(top, left, timeBetweenSteps) {
  // this = Object.create(MakeBlinkyDancer);
  
  MakeDancer.call(this, top, left, timeBetweenSteps);
  // this.top = top;
  // this.left = left;
  //this.timeBetweenSteps = timeBetweenSteps;
  //return this
  
  
  
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  // console.log(MakeBlinkyDancer.prototype.oldStep);
};

MakeBlinkyDancer.prototype = Object.create(MakeDancer.prototype);
MakeBlinkyDancer.prototype.constructor = MakeBlinkyDancer;  
// MakeBlinkyDancer.prototype.oldStep = MakeDancer.prototype.step(timeBetweenSteps);
MakeBlinkyDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  console.log('first', this);
  MakeDancer.prototype.step.call(this);
  // this.oldStep(timeBetweenSteps);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();
  
};