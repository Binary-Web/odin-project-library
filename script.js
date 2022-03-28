let myLibrary = [];

function Book(id, title, author, pages, isRead) {
  this.id = id;
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

function addBookToLibrary(newBook) {
    myLibrary.push(newBook);
}

function getBook(id) {
    return myLibrary.find(book => book.id == id);
}


const showModal = document.querySelector('.btn-modal');
const modal = document.querySelector('.modal');
showModal.addEventListener('click', () => {
    modal.style.display = "flex";
})

window.addEventListener('click', (e) => {
    if (e.target == modal) {
        modal.style.display = "none";
    }
})


// BOOK CARDS LIST
const cardContainer = document.querySelector('.card-container');
const gridCards = () => {
    resetGridCards()
    for (let book of myLibrary) {
        createBookCard(book);
    }
}

const resetGridCards = () => {
    cardContainer.innerHTML = "";
}
// GETTING USER INPUTS 
const addBook = document.querySelector('.btn-add-book');
const modalForm = document.querySelector('.modal-form');
const errorMessage = document.querySelector('.error-message');
addBook.addEventListener('click', (e) => {
    e.preventDefault();
    const bookTitle = document.querySelector("#bookTitle").value;
    const bookAuthor = document.querySelector("#bookAuthor").value;
    const bookNumPages = document.querySelector("#bookNumPages").value;
    const isRead = document.querySelector("#isRead").checked;

    if(bookTitle == "" || bookAuthor == "" || bookNumPages == "") {
        errorMessage.style.display = "block";
    } else {
        errorMessage.style.display = "none";
        const bookId = myLibrary.length + 1;
        const newBook = new Book(bookId, bookTitle, bookAuthor, bookNumPages, isRead);
        modal.style.display = "none"
    
        modalForm.reset();
        addBookToLibrary(newBook);
        createBookCard(newBook);
    }
});

// MAKING A BOOK CARD
const createBookCard = (book) => {
    const bookCard = document.createElement('div');
    const title = document.createElement('p');
    const author = document.createElement('p');
    const pages = document.createElement('p');
    const btnGroup = document.createElement('div')
    const readBtn = document.createElement('button');
    const delBtn = document.createElement('button');

    bookCard.classList.add('book-card');
    btnGroup.classList.add('btn-group');
    readBtn.classList.add('btn');
    readBtn.classList.add(book.isRead ? "read" : "not-read");
    delBtn.classList.add('btn');

    readBtn.addEventListener('click', (e) => {
        e.preventDefault();
        toggleRead(book.id)
    })
    delBtn.addEventListener('click', (e) => {
        e.preventDefault();
        deleteBook(book.id);
    })

    bookCard.setAttribute('key', `${book.id}`);
    title.textContent = `"${book.title}"`
    author.textContent = `${book.author}`
    pages.textContent = `${book.pages} Pages`
    readBtn.textContent = book.isRead ? "Read" : "Not Read";
    delBtn.textContent = "Delete";

    btnGroup.append(readBtn, delBtn);
    bookCard.append(title, author, pages, btnGroup);
    cardContainer.append(bookCard)
}

const toggleRead = (id) => {
    const updateBook = getBook(id);
    updateBook.isRead = !updateBook.isRead;
    gridCards();
}

const deleteBook = (id) => {

    myLibrary = myLibrary.filter(book => book.id !== id);
    gridCards();
}

// duplicate book is not yet done