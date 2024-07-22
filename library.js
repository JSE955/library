const library = document.querySelector(".library");
const addBookBtn = document.querySelector(".addBookBtn");
const formModal = document.querySelector(".form-modal");
const cancelBtn = document.querySelector(".cancelBtn");
const addBtn = document.querySelector(".addBtn");

const bookForm = document.getElementById("book-form");
const titleField = document.querySelector("#title");
const authorField = document.querySelector("#author");
const pagesField = document.querySelector("#pages");
const readField = document.querySelector("#read");

addBookBtn.addEventListener("click", () => {
    formModal.showModal();
});

cancelBtn.addEventListener("click", () => {
    bookForm.reset();
    formModal.close();
});

addBtn.addEventListener("click", () => {
    addBookToLibrary(
        titleField.value,
        authorField.value,
        pagesField.value,
        readField.value);
    displayBooks();
    bookForm.reset();
    formModal.close();
});

const myLibrary = [
    new Book("Sin City", "Frank Miller", 300, "read"),
    new Book("Batman: Bloom", "Scott Snyder", 300, "not yet read"),
    new Book("Punisher Max", "Jason Aaron", 150, "read"),
];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return `${this.title} by ${this.author}, ${pages} pages, ${read}`;
    }
}

function addBookToLibrary(title, author, pages, read) {
    let book = new Book(title, author, pages, read);
    myLibrary.push(book);
}

function displayBooks() {
    let newTableBody = document.createElement("tbody");
    for (let i = 0; i < myLibrary.length; i++) {
        let row = document.createElement("tr");
        
        let titleCell = document.createElement("td");
        titleCell.textContent = myLibrary[i].title;
        let authorCell = document.createElement("td");
        authorCell.textContent = myLibrary[i].author;
        let pagesCell = document.createElement("td");
        pagesCell.textContent = myLibrary[i].pages;
        let readCell = document.createElement("td");
        readCell.textContent = myLibrary[i].read;
        
        let removeCell = document.createElement("td");
        let removeBtn = document.createElement("button")
        removeBtn.textContent = "Remove Book";
        removeBtn.setAttribute("type", "button");
        removeBtn.addEventListener("click", () => {
            myLibrary.splice(i, 1);
            displayBooks();
        });
        removeCell.appendChild(removeBtn);

        row.appendChild(titleCell);
        row.appendChild(authorCell);
        row.appendChild(pagesCell);
        row.appendChild(readCell);
        row.appendChild(removeCell);

        newTableBody.appendChild(row); 
    }
    let oldTableBody = document.querySelector("tbody");
    oldTableBody.parentNode.replaceChild(newTableBody, oldTableBody);
}

displayBooks();

