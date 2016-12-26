document.addEventListener('DOMContentLoaded', () => {
  const box = document.querySelector('#box');
  const up = document.querySelector('#up');
  const down = document.querySelector('#down');

  up.addEventListener('click', () => {
    box.setAttribute('class', 'up');
  });

  down.addEventListener('click', () => {
    box.setAttribute('class', 'down')
  });

  box.addEventListener('animationend', () => {
    const cls = box.getAttribute('class');
    if (cls === 'down') {
      box.setAttribute('class', 'hidden');
    }    
  }, false);
  box.addEventListener('animationiteration', () => {}, false);
});
