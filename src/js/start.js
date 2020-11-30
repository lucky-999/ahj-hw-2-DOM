/* eslint import/no-cycle:0 */ // --> OFF
/* eslint no-plusplus:0 */ // --> OFF

import goblin from '../img/goblin.png';
import { intervalID } from './app';

export const text = document.getElementsByTagName('h1')[0];
let number = 0;

export default function start() {
  const img = document.createElement('img');
  img.src = goblin;

  const id = Math.floor(Math.random() * 16);
  const td = document.getElementById(`${id}`);
  td.appendChild(img);
  text.textContent = `Ты пропустил гоблинов: ${number}`;
  number++;
  if (number > 5) {
    const loose = document.createElement('h2');
    document.body.appendChild(loose);
    loose.textContent = 'Ты проиграл! Игра закончена :(';
    clearInterval(intervalID);
    td.innerHTML = '';
  }
  td.onclick = function () {
    number--;
  };
}
