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

function changeSong(option) {
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
}

nextButton.addEventListener('click', () => {
  changeSong('next');
});

prevButton.addEventListener('click', () => {
  changeSong('prev');
});

buttonPlay.addEventListener('click', () => {
  labelPlay.classList.toggle('fa-pause');
  labelPlay.classList.toggle('fa-play');
});
