var MakeDancer = function(top, left, timeBetweenSteps) {
  this._timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<span class="dancer"></span>');
  this.step();
  this.setPosition(top, left);

};

MakeDancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};
  
MakeDancer.prototype.step = function() {
  setTimeout(this.step.bind(this), this._timeBetweenSteps);
};
