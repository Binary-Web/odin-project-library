let myLibrary = []

function Book(title, author, numPage, isRead) {
    this.title = title;
    this.author = author;
    this.numPage = numPage;
    this.isRead = isRead
}

const showModal = document.querySelector('.btn-modal');
const modal = document.querySelector('.modal');

showModal.addEventListener('click', () => {
    modal.style.display = "flex"
})

window.addEventListener('click', (e) => {
    if (e.target == modal) {
        modal.style.display = "none"
    }
})


// I WILL COMEBACK TO THIS
// window.addEventListener('keypress', (e) => {
//     if(e.key === "Escape") {
//         console.log
//     }
// })