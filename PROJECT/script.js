const modalBtns = document.querySelectorAll('._modal__open');
const modals = document.querySelectorAll('.modal');

function openModal(elem){
    elem.classList.add('_active')
}

modalBtns.forEach(btn =>{
    btn.addEventListener('click', (e) => {
        let data = e.target.dataset.modalOpen;

        modals.forEach(modal =>{
            if(modal.dataset.modal == data || modal.dataset.modal == e.target.closest('._modal__open').dataset.modalOpen) {
                openModal(modal)
            }
        })
    })
})