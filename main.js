var body = document.querySelector('body');
var startActivityBtn = document.querySelector('.start');
var newActivity = document.querySelector('.new-activity');
var timer = document.querySelector('.timer');
var study = document.querySelector('.study');
var meditate = document.querySelector('.meditate');
var exercise = document.querySelector('.exercise');
var categoryGroup = document.querySelector('.select-category');
var activityColor = null;
var selectedActivity = null;
var startTimerButton = document.querySelector('.start-timer');
var createNewBtn = document.querySelector('.create-new');
var timerHolder = document.querySelector('.timer-holder');
var timerBorder = document.querySelector('.start-timer-wrapper');
var inputAccomplish = document.querySelector('.input-accomplish');
var warningMessage = document.querySelector('.warning-message');
var startButton = document.querySelector('.start');
var logBtn = document.querySelector('.log');
var secondsInput = parseInt(document.querySelector('.seconds').value);
var minutesInput = parseInt(document.querySelector('.minutes').value);
var pastActivityColor = document.querySelector('.past-activity-color');

function clear() {
  var normalBtnsImgs = categoryGroup.querySelectorAll('.category-img');
  var activeBtnsImgs = categoryGroup.querySelectorAll('.category-img-active');

  categoryGroup.querySelectorAll('p').forEach((label) => {
    label.style.color = '#CBC9CF';
  });
  categoryGroup.querySelectorAll('.category').forEach((button) => {
    button.style.borderColor = '#CBC9CF';
  });
  activeBtnsImgs.forEach((button) => {
    button.classList.add('hidden');
  });
  normalBtnsImgs.forEach((button) => {
    button.classList.remove('hidden');
  });
}

function buttonHighlight(e) {
  clear();
  if (e.target.matches('.study, .study img, .study p')) {
    study.style.borderColor = '#B3FD78';
    study.querySelector('p').style.color = '#B3FD78';
    timerBorder.style.borderColor = '#B3FD78';
    activityColor = '#B3FD78';
    selectedActivity = 'Study';
    study.classList.add('active');
  }
  if (e.target.matches('.meditate, .meditate img, .meditate p')) {
    meditate.style.borderColor = '#C278FD';
    meditate.querySelector('p').style.color = '#C278FD';
    timerBorder.style.borderColor = '#C278FD';
    activityColor = '#C278FD';
    selectedActivity = 'Meditate';
    study.classList.add('active');
  }
  if (e.target.matches('.exercise, .exercise img, .exercise p')) {
    exercise.style.borderColor = '#FD8078';
    exercise.querySelector('p').style.color = '#FD8078';
    timerBorder.style.borderColor = '#FD8078';
    activityColor = '#FD8078';
    selectedActivity = 'Exercise';
    study.classList.add('active');
  }
}

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

function showTimer() {
  newActivity.classList.add('hidden');
  timer.classList.remove('hidden');
  timerHolder.classList.remove('hidden');
  createNewBtn.classList.add('hidden');
  var secondsInput = document.querySelector('.seconds').value;
  var minutesInput = document.querySelector('.minutes').value;
  if (secondsInput < 10) {
    body.querySelector('.countdown-timer').innerHTML = `0${minutesInput}:0${secondsInput}`;
  } else {
    body.querySelector('.countdown-timer').innerHTML = `${minutesInput}:${secondsInput}`;
  }
  body.querySelector('.start-timer').innerHTML = `START`;
}

function showNewActivity() {
  newActivity.classList.remove('hidden');
  timer.classList.add('hidden');
}

var activitySelected;

function checkHighlight() {
  var buttonArray = [study, meditate, exercise];

  for (let i = 0; i < buttonArray.length; i++) {
    if (buttonArray[i].matches('.active')) {
      activitySelected = true;
    } else {
      return;
    }
  }
}

function getInputs() {
  var secondsInput = document.querySelector('.seconds');
  var minutesInput = document.querySelector('.minutes');
  var buttonArray = [study, meditate, exercise];

  if (!selectedActivity) {
    alert('Please select an activity category.');
  } else {
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
}

function countdownTimer() {
  var accomplishment = body.querySelector('.input-accomplish').value;
  var seconds = getInputs();

  body.querySelector('.input-accomplish-label').innerHTML = accomplishment;
  var interval = setInterval(function() {
    seconds--;
    if (seconds === 0) {
      clearInterval(interval);
      body.querySelector('.start-timer').innerHTML = 'COMPLETE';
    }
    var d = new Date(seconds * 1000);
    var timeStr = d.toISOString().slice(14, 19);
    body.querySelector('.countdown-timer').innerHTML = timeStr;
  }, 1000);

}

function logPastActivity() {
  var secondsInput = parseInt(document.querySelector('.seconds').value);
  var minutesInput = parseInt(document.querySelector('.minutes').value);
  var logContainer = document.querySelector('.log-container');

  body.querySelector('.past-activity-message').style.display = 'none';

  logContainer.insertAdjacentHTML('afterbegin',
    `<section class='past-activity-log'>
      <div class='past-activity-color'></div>
      <h4 class='past-activity-category'>${selectedActivity}</h4>
      <p class='past-activity-duration'>${minutesInput} MIN ${secondsInput} SECONDS</p>
      <p class='past-activity-accomplishment'>${inputAccomplish.value}</p>
    </section>`);

  var pastActivityColor = body.querySelector('.past-activity-color');
  pastActivityColor.style.backgroundColor = activityColor;
  timerHolder.classList.add('hidden');
  createNewBtn.classList.remove('hidden');
}

startActivityBtn.addEventListener('click', getInputs);
categoryGroup.addEventListener('click', selectActivityHandler);
startTimerButton.addEventListener('click', countdownTimer);
logBtn.addEventListener('click', logPastActivity);
createNewBtn.addEventListener('click', showNewActivity);
