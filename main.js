//warning when accomplishment message is empty
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
    showTimer();
  }
});

//WARNING: not working!! min / sec input accepts only positive number
var inputTime = document.querySelector('.input-min-sec');

inputTime.addEventListener('keypress', function () {
  if (form.inputType.value < 0) {
    alert('enter positive value!');
  }
});




const body = document.querySelector('body');
const startActivityBtn = body.querySelector('.start');
const newActivity = body.querySelector('.new-activity');
const timer = body.querySelector('.timer');

function showTimer() {
  console.log('hi');
  newActivity.classList.add('hidden');
  timer.classList.remove('hidden');
}
