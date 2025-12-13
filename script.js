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
  constructor(title, author, read = false) {
    this.title = title;
    this.author = author;
    this.read = read;
  }

  toggleRead() {
    this.read = !this.read;
  }
}

const readInput = document.getElementById('read');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  addBookToLibrary(titleInput.value, authorInput.value, readInput.checked);

  form.reset();
  toggleModal();
});

function addBookToLibrary(title, author, read) {
  const newBook = new Book(title, author, read);

  myLibrary.push(newBook);

  displayBook(newBook);
}

function toggleReadStatus(book, readStatus) {
  book.toggleRead();
  readStatus.classList.toggle('book-read', book.read);
  readStatus.classList.toggle('book-unread', !book.read);
  readStatus.innerHTML = `<p>${book.read ? 'Read' : 'Unread'}</p>`;
  readStatus.classList.remove('is-toggling');
  // Force restart of animation when toggling repeatedly
  void readStatus.offsetWidth;
  readStatus.classList.add('is-toggling');
  readStatus.addEventListener(
    'animationend',
    () => readStatus.classList.remove('is-toggling'),
    { once: true }
  );
}

function deleteBook(book, bookItem) {
  bookItem.classList.add('is-removing');

  const onDone = () => {
    const index = myLibrary.indexOf(book);
    if (index > -1) {
      myLibrary.splice(index, 1);
    }
    bookItem.remove();
  };

  // If transitions are disabled (e.g. prefers-reduced-motion), remove immediately.
  const styles = window.getComputedStyle(bookItem);
  const duration =
    parseFloat(styles.transitionDuration) ||
    parseFloat((styles.transitionDuration || '0').split(',')[0]) ||
    0;

  if (!duration) {
    onDone();
    return;
  }

  bookItem.addEventListener('transitionend', onDone, { once: true });
}

function displayBook(book) {
  const bookItem = document.createElement('li');
  bookItem.classList.add('book-item');
  bookItem.classList.add('is-entering');
  bookItem.addEventListener(
    'animationend',
    () => bookItem.classList.remove('is-entering'),
    { once: true }
  );

  const cover = document.createElement('div');
  cover.classList.add('book-cover');
  cover.innerHTML = '<img src="img/cover.jpg" alt="capa de livro" />';

  const title = document.createElement('div');
  title.classList.add('book-title');
  title.innerHTML = `<h2>${book.title}</h2>`;

  const author = document.createElement('div');
  author.classList.add('book-author');
  author.innerHTML = `<h2>${book.author}</h2>`;

  const readStatus = document.createElement('div');
  readStatus.classList.add(book.read ? 'book-read' : 'book-unread');
  readStatus.innerHTML = `<p>${book.read ? 'Read' : 'Unread'}</p>`;
  readStatus.addEventListener('click', () =>
    toggleReadStatus(book, readStatus)
  );

  const deleteBtn = document.createElement('div');
  deleteBtn.classList.add('book-delete');
  deleteBtn.innerHTML = '<img src="img/fechar.svg" alt="excluir livro" />';
  deleteBtn.addEventListener('click', () => deleteBook(book, bookItem));

  const actions = document.createElement('div');
  actions.classList.add('book-actions');
  actions.appendChild(readStatus);
  actions.appendChild(deleteBtn);

  bookItem.appendChild(cover);
  bookItem.appendChild(title);
  bookItem.appendChild(author);
  bookItem.appendChild(actions);

  books.appendChild(bookItem);
}
