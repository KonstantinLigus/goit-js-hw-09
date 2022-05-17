refs = {
  startBtn: document.querySelector('[data-start]'),
  stopBtn: document.querySelector('[data-stop]'),
};
refs.startBtn.addEventListener('click', handleStartBtnClick);
refs.stopBtn.addEventListener('click', handleStoptBtnClick);

let intervalId = null;

function handleStartBtnClick(event) {
  intervalId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  event.target.setAttribute('disabled', 'true');
  refs.stopBtn.removeAttribute('disabled');
}

function handleStoptBtnClick(event) {
  clearInterval(intervalId);
  event.target.setAttribute('disabled', 'true');
  refs.startBtn.removeAttribute('disabled');
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
