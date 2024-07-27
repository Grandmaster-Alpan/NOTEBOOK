const addText = document.querySelector('.notebook__addText-btn');
const notebookWrapper = document.querySelector('.notebook__list-FormToFill');
const plus = document.querySelector('.notebook__addText-btn__text');
const boxShadow = document.querySelector('.notebook__wrapper');


addText.addEventListener('click', () => {
    notebookWrapper.classList.toggle('openNotebook');
    plus.classList.toggle('activeClose');
});


// light shadow
window.addEventListener('DOMContentLoaded', () => {
    setInterval(() => {
        lightShadow();
    }, 1500);
});

function lightShadow() {
    boxShadow.style.boxShadow = '0px 0px 20px 12px rgb(0, 140, 255)';
    setTimeout(() => {
        offShadow();
    }, 500)
}

function offShadow() {
    boxShadow.style.boxShadow = 'none';
}