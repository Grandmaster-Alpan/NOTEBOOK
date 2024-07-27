window.addEventListener('click', (event) => {
    if(event.target.classList.contains('notebook__item-delete__btn')){
        const paren = event.target.parentNode;
        paren.parentNode.remove();
    }
})