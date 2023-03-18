let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.info = function() {
    console.log(`${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? 'read' : 'not read yet'}`)
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

const bookTable = document.querySelector('.bookTable');

let test1 = new Book('Batman', 'Kevin Conroy', 35, false);
let test2 = new Book('Lion King', 'Disney', 100, true);
let test3 = new Book('Spider Man', 'Marvel', 150, false);

addBookToLibrary(test1);
addBookToLibrary(test2);
addBookToLibrary(test3);

myLibrary.forEach((book) => {
    let newRow = document.createElement('tr');
    let titleCell = document.createElement('td');
    let authorCell = document.createElement('td');
    let pagesCell = document.createElement('td');
    let readCell = document.createElement('td');

    titleCell.appendChild(document.createTextNode(book.title))
    authorCell.appendChild(document.createTextNode(book.author))
    pagesCell.appendChild(document.createTextNode(book.pages))
    readCell.appendChild(document.createTextNode(book.read))

    newRow.appendChild(titleCell);
    newRow.appendChild(authorCell);
    newRow.appendChild(pagesCell);
    newRow.appendChild(readCell);

    bookTable.appendChild(newRow);
})

