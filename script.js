const abrirModal = document.querySelector('[data-modal="abrir"]');
const fecharModal = document.querySelector('[data-modal="fechar"]');
const modalContainer = document.querySelector('.modal-container');

abrirModal.addEventListener('click', toggleModal);
fecharModal.addEventListener('click', toggleModal);
modalContainer.addEventListener('click', foraModal);

function toggleModal() {
  modalContainer.classList.toggle('ativo');
}

function foraModal(event) {
  if (event.target === modalContainer) {
    toggleModal();
  }
}
