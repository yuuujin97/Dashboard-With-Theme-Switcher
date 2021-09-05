'use strict';

const theme__switch = document.querySelector('.theme__switch');

function checkTheme() {
  if (theme__switch.checked) {
    return document.documentElement.setAttribute('color-theme', 'light');
  } else {
    return document.documentElement.setAttribute('color-theme', 'dark');
  }
}

window.onload = checkTheme();

theme__switch.addEventListener('click', checkTheme);
