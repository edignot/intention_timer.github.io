const body = document.querySelector('body');
const startActivityBtn = body.querySelector('.start');
const newActivity = body.querySelector('.new-activity');
const timer = body.querySelector('.timer');
const study = body.querySelector('.study');
const meditate = body.querySelector('.meditate');
const exercise = body.querySelector('.exercise');
const categoryGroup = body.querySelector('.select-category');



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

function buttonHighlight(e) {
  clear();
  if (e.target.matches('.study, .study img, .study p')) {
    study.style.borderColor = '#B3FD78';
    study.querySelector('p').style.color = '#B3FD78';
  }
  if (e.target.matches('.meditate, .meditate img, .meditate p')) {
    meditate.style.borderColor = '#C278FD';
    meditate.querySelector('p').style.color = '#C278FD';
  }
  if (e.target.matches('.exercise, .exercise img, .exercise p')) {
    exercise.style.borderColor = '#FD8078';
    exercise.querySelector('p').style.color = '#FD8078';
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

function showTimer() {
  newActivity.classList.add('hidden');
  timer.classList.remove('hidden');
}


function requiredInfoWarning() {
  if (inputAccomplish.value === '') {
    warningMessage.style.display = 'block';
    inputAccomplish.style.borderBottom = '2px solid #EFB7EC';
  } else {
    warningMessage.style.display = 'none';
    inputAccomplish.style.borderBottom = '2px solid #fff';
    showTimer();
  }
}

// Countdown timer function


// function getInputValue() {
//            // Selecting the input element and get its value
//            let secondsInput = parseInt(document.querySelector('.seconds').value);
//
//            alert(typeof secondsInput);
//        }

// function timer() {
//
// }


startActivityBtn.addEventListener('click', requiredInfoWarning);
categoryGroup.addEventListener('click', selectActivityHandler);
