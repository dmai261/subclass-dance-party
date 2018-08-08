$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    var dancerMakerFunction = window[dancerMakerFunctionName];
    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    window.dancers.push(dancer);
    $('body').append(dancer.$node);
  });
  
  $('.addMovingDancerButton').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    var dancerMakerFunction = window[dancerMakerFunctionName];
    var movingDancer = new dancerMakerFunction (
      $("body").height() * Math.random(),
      $("body").width() * Math.random()
    );
    window.dancers.push(movingDancer);
    $('body').append(movingDancer.$node);
  });
  
  $('.addSpinningDancerButton').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    var dancerMakerFunction = window[dancerMakerFunctionName];
    var spinningDancer = new dancerMakerFunction(
      ($("body").height() * Math.random())-100,
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    window.dancers.push(spinningDancer);
    $('body').append(spinningDancer.$node);
  });
  
  $('.lineup').on('click', function(event) {
    let top = $("body").height()/2+200;
    let left = $("body").width()/2;
    window.dancers.forEach(function(dancer) {
      if (dancer.$node[0].className === 'movingDancer') {
        top -= 50;
        dancer.setPosition(top,left);
      }
    });
    
    let top1 = $("body").height()/2+200;
    let left1 = $("body").width()/2;
    window.dancers.forEach(function(dancer) {
      
      if (dancer.$node[0].className === 'spinningDancer') {
        top1 -= 100;
        dancer.setPosition(top1,left1);
      }
    });
    
    let top2 = $("body").height()/2+200;
    let left2 = $("body").width()/2;
    window.dancers.forEach(function(dancer) {
      if (dancer.$node[0].className === 'dancer') {
        top2 -= 100;
        dancer.setPosition(top2,left2+100);
      }
    });
  });
});







