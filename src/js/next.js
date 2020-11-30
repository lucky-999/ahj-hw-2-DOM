/* eslint import/no-cycle:0 */ // --> OFF

import start from './start';

export default function next() {
  const lastImg = document.getElementsByTagName('img')[0];
  lastImg.remove();
  start();
}
