// warning when accomplishment message is empty
var inputAccomplish = document.querySelector('.input-accomplish');
var warningMessage = document.querySelector('.warning-message');
var startButton = document.querySelector('.start');

startButton.addEventListener('click', function () {
  if (inputAccomplish.value === '') {
    warningMessage.style.display = 'block';
    inputAccomplish.style.borderBottom = '2px solid #EFB7EC';
  } else {
    warningMessage.style.display = 'none';
    inputAccomplish.style.borderBottom = '2px solid #fff';
  }
});

// WARNING: not working!! min / sec input accepts only positive number
var inputTime = document.querySelector('.input-min-sec');

inputTime.addEventListener('keypress', function () {
  if (form.inputType.value < 0) {
    alert('enter positive value!');
  }
});

// get seconds from input
var count = 1000;
// 1000 - one second
var counter = setInterval(timer, 1000);

function timer() {
  count = count - 1;
  if (count <= 0) {
    clearInterval(counter);
    alert('time is over!');
  }
    document.getElementById("timer").innerHTML=count; //
}
