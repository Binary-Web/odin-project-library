let myLibrary = []

function Book(id, title, author, numPage, isRead) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.numPage = numPage;
    this.isRead = isRead
}

function addBookToLibrary(book) {
    myLibrary.push(book);
    console.log(myLibrary)
}


const showModal = document.querySelector('.btn-modal');
const modal = document.querySelector('.modal');
const modalForm = document.querySelector('.modal-form');
const addBook = document.querySelector('.btn-add-book');
const cardContainer = document.querySelector('.card-container');

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
    const bookId = myLibrary.length + 1;
    console.log(isRead)
    const book = new Book(bookId, bookTitle, bookAuthor, bookNumPages, isRead);
    modal.style.display = "none"
    addBookToLibrary(book);
    addCard();

})


// I WILL COMEBACK TO THIS
// window.addEventListener('keypress', (e) => {
//     if(e.key === "Escape") {
//         console.log
//     }
// })


// making book cards
const card = document.createElement("div");
card.classList.add('book-card');

function addCard(){


    while (cardContainer.firstChild) {
        cardContainer.removeChild(cardContainer.firstChild);
    }

    myLibrary.forEach((element, index) => {
        const card = document.createElement("div");
        const bookStatus = document.createElement("div");
        bookStatus.classList.add('book-status');
        bookStatus.classList.add(`${element.isRead ? "read" : "not-read"}`)
        bookStatus.innerHTML = `<span> ${element.isRead ? "Read" : "Not Read"}`
        card.classList.add('book-card');
        card.setAttribute('key', element.id)
        card.innerHTML = `
                <div class="card-div">    
                    <span>Title: </span>
                    <h4>${element.title}</h4>
                </div>
                <div class="card-div">
                    <span>Author: </span>
                    <span>${element.author}</span>
                </div>
                <div class="card-div">
                    <span>Pages: </span>
                    <span>${element.numPage}</span>
                </div>
        `;


        //THIS UPDATES THE BOOK STATUS INTERNALLY
        card.appendChild(bookStatus)
        console.log(bookStatus)
        bookStatus.addEventListener('click', () => {
            const id = card.getAttribute('key');
            const book = myLibrary.findIndex(x => x.id == id)
            myLibrary[book] = !element.isRead;
            console.log(myLibrary);
        })

        cardContainer.append(card)
    })
}


