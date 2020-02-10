const body = document.querySelector('body');
const startActivityBtn = body.querySelector('.start');
const newActivity = body.querySelector('.new-activity');
const timer = body.querySelector('.timer');
const study = body.querySelector('.study');
const meditate = body.querySelector('.meditate');
const exercise = body.querySelector('.exercise');
const categoryGroup = body.querySelector('.select-category');
let activityColor = null;
const startTimerButton = body.querySelector('.start-timer');



// clear function for use in buttonHighlight

function clear() {
  const normalBtnsImgs = categoryGroup.querySelectorAll('.category-img');
  const activeBtnsImgs = categoryGroup.querySelectorAll('.category-img-active');

  categoryGroup.querySelectorAll('p').forEach((label) => {
    label.style.color = "#CBC9CF";
  });
  categoryGroup.querySelectorAll('.category').forEach((button) => {
    button.style.borderColor = "#CBC9CF";
  });
  activeBtnsImgs.forEach((button) => {
    button.classList.add('hidden');
  });
  normalBtnsImgs.forEach((button) => {
    button.classList.remove('hidden');
  });
}

// changes border and <p> to correct color for each button
// for use in selectActivityHandler
const timerBorder = body.querySelector('.start-timer-wrapper');

function buttonHighlight(e) {


  clear();
  if (e.target.matches('.study, .study img, .study p')) {
    study.style.borderColor = '#B3FD78';
    study.querySelector('p').style.color = '#B3FD78';
    timerBorder.style.borderColor = '#B3FD78';
    activityColor = '#B3FD78';
  }
  if (e.target.matches('.meditate, .meditate img, .meditate p')) {
    meditate.style.borderColor = '#C278FD';
    meditate.querySelector('p').style.color = '#C278FD';
    timerBorder.style.borderColor = '#C278FD';
    activityColor = '#C278FD';
  }
  if (e.target.matches('.exercise, .exercise img, .exercise p')) {
    exercise.style.borderColor = '#FD8078';
    exercise.querySelector('p').style.color = '#FD8078';
    timerBorder.style.borderColor = '#FD8078';
    activityColor = 'FD8078';
  }
}



// change button to correctly colored img, border, and text

function selectActivityHandler(e) {
  if (e.target.matches('.study, .study img, .study p')) {
    buttonHighlight(e);
    study.querySelector('.study-img').classList.add('hidden');
    study.querySelector('.study-img-active').classList.remove('hidden');
  }
  if (e.target.matches('.meditate, .meditate img, .meditate p')) {
    buttonHighlight(e);
    meditate.querySelector('.meditate-img').classList.add('hidden');
    meditate.querySelector('.meditate-img-active').classList.remove('hidden');
  }
  if (e.target.matches('.exercise, .exercise img, .exercise p')) {
    buttonHighlight(e);
    exercise.querySelector('.exercise-img').classList.add('hidden');
    exercise.querySelector('.exercise-img-active').classList.remove('hidden');
  }
}



//warning when accomplishment message is empty
var inputAccomplish = document.querySelector('.input-accomplish');
var warningMessage = document.querySelector('.warning-message');
var startButton = document.querySelector('.start');

// shows timer section

function showTimer() {
  newActivity.classList.add('hidden');
  timer.classList.remove('hidden');
}

// Countdown timer function


function getInputs() {
  let secondsInput = document.querySelector('.seconds');
  let minutesInput = document.querySelector('.minutes');


  if (inputAccomplish.value.length > 0) {
    var numbers = /^[0-9]+$/;
    if (secondsInput.value.match(numbers) && minutesInput.value.match(numbers)) {
      showTimer();
      return parseInt(secondsInput.value) + (parseInt(minutesInput.value) * 60);
    } else {
      alert('Please input number of minutes and seconds.');
    }
  } else {
    warningMessage.style.display = 'block';
    inputAccomplish.style.borderBottom = '2px solid #EFB7EC';
    return;
  }
}

// runs countdown timer

function countdownTimer() {
  console.log('hi');
  let accomplishment = body.querySelector('.input-accomplish').value;
  let seconds = getInputs();

  body.querySelector('.input-accomplish-label').innerHTML = accomplishment;
  var interval = setInterval(function() {
    seconds--;
    if (seconds == 0) {
      clearInterval(interval);
      // alert('Time is up!');
      body.querySelector('.start-timer').innerHTML = 'COMPLETE';
    }
    var d = new Date(seconds * 1000);
    var timeStr = d.toISOString().slice(14, 19);
    body.querySelector('.countdown-timer').innerHTML = timeStr;
  }, 1000);

}

// past activity log cards
const logBtn = body.querySelector('.log');
let secondsInput = parseInt(document.querySelector('.seconds').value);
let minutesInput = parseInt(document.querySelector('.minutes').value);

let pastActivityColor = body.querySelector('.past-activity-color');



function logPastActivity() {
  let secondsInput = parseInt(document.querySelector('.seconds').value);
  let minutesInput = parseInt(document.querySelector('.minutes').value);
  const logContainer = body.querySelector('.log-container');


  body.querySelector('.past-activity-message').style.display = 'none';

  logContainer.insertAdjacentHTML('afterbegin',
    `<section class='past-activity-log'>
      <div class='past-activity-color'></div>
      <h4 class='past-activity-category'></h4>
      <p class='past-activity-duration'>${minutesInput} MIN ${secondsInput} SECONDS</p>
      <p class='past-activity-accomplishment'>${inputAccomplish.value}</p>
    </section>`);

    let pastActivityColor = body.querySelector('.past-activity-color');
    pastActivityColor.style.backgroundColor = activityColor;
}


startTimerButton.addEventListener('click', countdownTimer);
startActivityBtn.addEventListener('click', getInputs);
categoryGroup.addEventListener('click', selectActivityHandler);
logBtn.addEventListener('click', logPastActivity);
