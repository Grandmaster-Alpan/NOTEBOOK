const addBtn = document.querySelector('.notebook__list-FormToFill__btn');
let textValue = document.querySelector('.notebook__list-FormToFill__text');
const wrapperItem = document.querySelector('.notebook__list');
const notebookWrapper2 = document.querySelector('.notebook__list-FormToFill');
const plus2 = document.querySelector('.notebook__addText-btn__text');

window.addEventListener('DOMContentLoaded', (event) => {
    addBtn.addEventListener('click', () => {
        let valText = textValue.value;
        const noteHTML = `
        <div class="notebook__item">
            <div class="notebook__item-delete" data-delete="delete">
                <button class="notebook__item-delete__btn"><i class="fa-sharp fa-solid fa-trash"></i></i></button>
            </div>
            <span class="notebook__item-text">${valText}</span>
        </div>
        `;
        if(valText.length === 0) {
            alert('Введите текст');
        } else {
            wrapperItem.insertAdjacentHTML('beforeend', noteHTML);
        }
        notebookWrapper2.classList.remove('openNotebook');
        plus2.classList.remove('activeClose');
        textValue.value = '';
    });
})