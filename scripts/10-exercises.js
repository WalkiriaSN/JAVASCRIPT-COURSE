
const jsbtn =
  document.querySelector('.js-button');
console.log(jsbtn.classList.contains('js-button'));

function toggleBtns(selector) {
  const toggleBtns = document.querySelector(selector);
  if (!toggleBtns.classList.contains('is-toggled')) {
    switchBtn();
    toggleBtns.classList.add('is-toggled');
  } else {
    toggleBtns.classList.remove('is-toggled');
  }
}

function switchBtn() {
  const switchBtn1 = document.querySelector('.is-toggled');
  if (switchBtn1) {
    switchBtn1.classList.remove('is-toggled');
  }
}
