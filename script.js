let displayTimer = document.querySelector('.displayTimer');
let [hours, minutes, seconds] = [0, 0, 0];
let timer = null;

function stopWatch() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }
  let hr = hours < 10 ? '0' + hours : hours;
  let min = minutes < 10 ? '0' + minutes : minutes;
  let sec = seconds < 10 ? '0' + seconds : seconds;

  displayTimer.innerHTML = `${hr}:${min}:${sec}`;
}

function watchStart() {
  if (timer !== null) {
    clearInterval(timer);
  }
  timer = setInterval(stopWatch, 1000);
}

function watchStop() {
  clearInterval(timer);
}

function watchRestart() {
  clearInterval(timer);
  [hours, minutes, seconds] = [0, 0, 0];
  displayTimer.innerHTML = '00:00:00';
}
