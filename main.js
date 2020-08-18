'use strict';

function removeTransition(ev) {
  if (ev.propertyName !== 'transform') return; // pasa si la propiedad de la clase key no es transform
  ev.target.classList.remove('playing');
}

function playSound(ev) {
  const audio = document.querySelector(`audio[data-key="${ev.keyCode}"]`); //llamamos en una constante a la etiqueta de audio que estemos clickando, que tenga el data-key que coincida con el data-key de las teclas

  const key = document.querySelector(`div[data-key="${ev.keyCode}"]`); //llamamos a la tecla que estemos clickando

  if (!audio) return; //si no hay audio en la tecla que toques para la función de ejecutarse

  key.classList.add('playing'); //a la constante key (la que pulsemos) le vamos a añadir la clase playing que tiene una transición

  audio.currentTime = 0; //nos rebobina al principio, pra que podamos volver a reproducir los sonidos una y otra vez, no solo una vez
  audio.play(); // si hay audio se ejecuta el método play() que viene ya dado
}

const keys = Array.from(document.querySelectorAll('.key'));

keys.forEach((key) => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);
