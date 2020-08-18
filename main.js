'use strict';

window.addEventListener('keydown', function (ev) {
  const audio = document.querySelector(`audio[data-key="${ev.keycode}"]`);
  const key = document.querySelector(`.key[data-key="${ev.keycode}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add('playing');
});
