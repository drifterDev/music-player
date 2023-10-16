import '../css/style.css';

const buttonPlay = document.getElementById('play');
const labelPlay = document.getElementById('label-play');
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');

function changeSong() {
  console.log('change song');
}

nextButton.addEventListener('click', () => {
  changeSong();
});

prevButton.addEventListener('click', () => {
  changeSong();
});

buttonPlay.addEventListener('click', () => {
  labelPlay.classList.toggle('fa-pause');
  labelPlay.classList.toggle('fa-play');
});
