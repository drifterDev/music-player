import '../css/style.css';
import data from './data';

const audio = document.getElementById('audio');
const buttonPlay = document.getElementById('play');
const labelPlay = document.getElementById('label-play');
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');
const imgCover = document.getElementById('cover');
const authorLabel = document.getElementById('author');
const titleLabel = document.getElementById('title');
const limitSongs = Object.keys(data).length;
let songActive = 1;

function pauseSong() {
  audio.pause();
  labelPlay.classList.remove('fa-pause');
  labelPlay.classList.add('fa-play');
}

function playSong() {
  audio.volume = 0.4;
  audio.play();
  labelPlay.classList.remove('fa-play');
  labelPlay.classList.add('fa-pause');
}

function changeSong(option) {
  pauseSong();
  if (option === 'next') {
    songActive += 1;
    if (songActive > limitSongs) {
      songActive = 1;
    }
  } else {
    songActive -= 1;
    if (songActive < 1) {
      songActive = limitSongs;
    }
  }
  imgCover.src = `./assets/cover-${songActive}.png`;
  authorLabel.innerHTML = data[songActive].author;
  titleLabel.innerHTML = data[songActive].title;
  audio.src = `assets/${data[songActive].src}`;
  playSong();
}

nextButton.addEventListener('click', () => {
  changeSong('next');
});

prevButton.addEventListener('click', () => {
  changeSong('prev');
});

buttonPlay.addEventListener('click', () => {
  if (labelPlay.classList.contains('fa-pause')) {
    pauseSong();
  } else {
    playSong();
  }
});
