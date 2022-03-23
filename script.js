let myLibrary = []

function Book(title, author, numPage, isRead) {
    this.title = title;
    this.author = author;
    this.numPage = numPage;
    this.isRead = isRead
}

function addBookToLibrary(book) {
    myLibrary.push(book)
}


const showModal = document.querySelector('.btn-modal');
const modal = document.querySelector('.modal');
const modalForm = document.querySelector('.modal-form');
const addBook = document.querySelector('.btn-add-book');


showModal.addEventListener('click', () => {
    modal.style.display = "flex"
})

window.addEventListener('click', (e) => {
    if (e.target == modal) {
        modal.style.display = "none"
    }
})

addBook.addEventListener('click', (e) => {
    e.preventDefault();
    const bookTitle = document.querySelector("#bookTitle").value;
    const bookAuthor = document.querySelector("#bookAuthor").value;
    const bookNumPages = document.querySelector("#bookNumPages").value;
    const isRead = document.querySelector("#isRead").checked;
    console.log(isRead)
    const book = new Book(bookTitle, bookAuthor, bookNumPages, isRead);
    addBookToLibrary(book)
})

console.log(Book)
// I WILL COMEBACK TO THIS
// window.addEventListener('keypress', (e) => {
//     if(e.key === "Escape") {
//         console.log
//     }
// })