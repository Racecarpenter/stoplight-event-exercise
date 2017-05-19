(function() {



  document.addEventListener('DOMContentLoaded', function() {
    var slowButton = document.getElementById('slowButton');
    var goButton = document.getElementById('goButton');
    var slowLight = document.getElementById('slowLight');
    var goLight = document.getElementById('goLight');
    var stopLight = document.getElementById('stopLight');


    var stopButton = document.querySelector('#stopButton');
    var button = document.querySelector('.button');
    var stopper = function() {
      stopLight.classList.toggle('stop');
    };
    var slower = function() {
      slowLight.classList.toggle('slow');
    };
    var goer = function() {
      goLight.classList.toggle('go');
    };
    var logger = function(e) {
      console.log(e.target);
    };
    var loggy = function() {
      if (stopLight.className == 'stop') {
        console.log(this.textContent + " is on");
      } else if (slowLight.className == 'slow') {
        console.log(this.textContent + " is on");
      } else if (goLight.className == 'go') {
        console.log(this.textContent + " is on");
      } else {
        console.log(this.textContent + " is off");
      }
    }
    stopButton.addEventListener('click', stopper);
    slowButton.addEventListener('click', slower);
    goButton.addEventListener('click', goer);
    stopButton.addEventListener('mouseenter', logger);
    slowButton.addEventListener('mouseenter', logger);
    goButton.addEventListener('mouseenter', logger);
    stopButton.addEventListener('mouseleave', logger);
    slowButton.addEventListener('mouseleave', logger);
    goButton.addEventListener('mouseleave', logger);
    button.addEventListener('click', loggy);
  });
})();
