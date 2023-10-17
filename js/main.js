// Autor: Mateo Álvarez Murillo
// Fecha de creación: 2023

// Este código se proporciona bajo la Licencia MIT.
// Para más información, consulta el archivo LICENSE en la raíz del repositorio.

import '../css/style.css';
import data from './data';

const audio = document.getElementById('audio');
const buttonPlay = document.getElementById('play');
const labelPlay = document.getElementById('label-play');
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');
const repeatButton = document.getElementById('repeat');
const imgCover = document.getElementById('cover');
const authorLabel = document.getElementById('author');
const titleLabel = document.getElementById('title');
const currentTimeLabel = document.getElementById('current-time');
const totalTimeLabel = document.getElementById('total-time');
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

function timeFormat(time) {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${(seconds < 10 ? '0' : '')}${seconds}`;
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
  imgCover.src = `img/${data[songActive].cover}`;
  authorLabel.innerHTML = data[songActive].author;
  titleLabel.innerHTML = data[songActive].title;
  audio.src = `audio/${data[songActive].src}`;
  playSong();
}

function showTime() {
  const current = audio.currentTime;
  const total = audio.duration;
  currentTimeLabel.textContent = timeFormat(current);
  totalTimeLabel.textContent = timeFormat(total);
  if (current === total && !repeatButton.classList.contains('on')) {
    changeSong('next');
  } else if (current === total) {
    audio.currentTime = 0;
    playSong();
  }
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

audio.addEventListener('timeupdate', showTime);

repeatButton.addEventListener('click', () => {
  repeatButton.classList.toggle('on');
  repeatButton.classList.toggle('off');
});
