var inputAccomplish = document.querySelector('.input-accomplish');
var warningMessage = document.querySelector('.warning-message');
var startButton = document.querySelector('.start');

startButton.addEventListener('submit', function () {
  if (inputAccomplish.value === undefined) {
    warningMessage.style.display = 'block';
  }
});
