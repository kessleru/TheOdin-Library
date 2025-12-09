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

const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const form = document.getElementById('add');
const books = document.getElementById('books');

let myLibrary = [];

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  addBookToLibrary(titleInput.value, authorInput.value);

  form.reset();
  toggleModal();
});

function addBookToLibrary(title, author) {
  const newBook = new Book(title, author);

  myLibrary.push(newBook);

  displayBook(newBook);
}

function displayBook(book) {
  const bookItem = document.createElement('li');
  bookItem.classList.add('book-item');

  const cover = document.createElement('div');
  cover.classList.add('book-cover');
  cover.innerHTML = '<img src="img/livro2.png" alt="capa de livro" />';

  const title = document.createElement('div');
  title.classList.add('book-title');
  title.innerHTML = `<h2>${book.title}</h2>`;

  const author = document.createElement('div');
  author.classList.add('book-author');
  author.innerHTML = `<h2>${book.author}</h2>`;

  const info = document.createElement('div');
  info.classList.add('book-info');
  info.innerHTML =
    '<a href=""><img src="img/info.svg" alt="info de um livro"/></a>';

  bookItem.appendChild(cover);
  bookItem.appendChild(title);
  bookItem.appendChild(author);
  bookItem.appendChild(info);

  books.appendChild(bookItem);
}
