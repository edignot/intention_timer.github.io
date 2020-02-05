var inputAccomplish = document.querySelector('.input-accomplish');
var warningMessage = document.querySelector('.warning-message');
var startButton = document.querySelector('.start');
var heading = document.querySelector('h1');
startButton.addEventListener('click', function () {
  if (inputAccomplish.value === '') {
    warningMessage.style.display = 'block';
  }
});
