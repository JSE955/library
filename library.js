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
const addButton = document.querySelector('.addButton');
const addForm = document.querySelector('.addForm');
const submitBook = document.querySelector('.submitBook');
addForm.style.display = 'none';

// Load test data into library array
let test1 = new Book('Batman', 'Kevin Conroy', 35, false);
let test2 = new Book('Lion King', 'Disney', 100, true);
addBookToLibrary(test1);
addBookToLibrary(test2);

const displayBooks = () => {
    document.querySelector('.bookTable').innerHTML = '';
    myLibrary.forEach((book, index) => {
        let newRow = document.createElement('tr');
        let titleCell = document.createElement('td');
        let authorCell = document.createElement('td');
        let pagesCell = document.createElement('td');
        let readCell = document.createElement('td');
        let deleteCell = document.createElement('td');
        let deleteBtn = document.createElement('button');
        deleteBtn.className = 'deleteBtn';
        deleteBtn.setAttribute('data-index', index);
    
        titleCell.appendChild(document.createTextNode(book.title))
        authorCell.appendChild(document.createTextNode(book.author))
        pagesCell.appendChild(document.createTextNode(book.pages))
        readCell.appendChild(document.createTextNode(book.read))
        deleteBtn.appendChild(document.createTextNode('Delete'))

        deleteBtn.addEventListener('click', (event) => {
            let index = event.target.dataset.index;
            myLibrary = myLibrary.filter(book => myLibrary.indexOf(book) != index);
            displayBooks();
        })
    
        newRow.appendChild(titleCell);
        newRow.appendChild(authorCell);
        newRow.appendChild(pagesCell);
        newRow.appendChild(readCell);
        newRow.appendChild(deleteCell);
        deleteCell.appendChild(deleteBtn);
    
        bookTable.appendChild(newRow);
        console.log(deleteBtn.dataset.index);

    })
}

// Display Form for adding books
addButton.addEventListener('click', () => {
    addForm.style.display = 'block';
})

// Submit Book information to library, update table
submitBook.addEventListener('click', (event) => {
    event.preventDefault();

    let newBook = {};
    newBook.title = document.getElementById('title').value;
    newBook.author = document.getElementById('author').value;
    newBook.pages = Number(document.getElementById('pages').value);
    newBook.read = document.querySelector('input[name="readYet"]:checked').value;

    addBookToLibrary(newBook);
    displayBooks();

    addForm.style.display = 'none';
    addForm.reset();
})

// Display initial library
displayBooks();



