let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.info = function() {
    console.log(`${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`)
}

Book.prototype.toggleRead = function() {
    console.log('is this working')
    if (this.read === 'read') {
        this.read = 'not yet read';
    } else {
        this.read = 'read';
    }
    return this;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

const bookTable = document.querySelector('.bookTable');
const addButton = document.querySelector('.addButton');
const submitBook = document.querySelector('.submitBook');

// Add Form DOM object, hide it
const addForm = document.querySelector('.addForm');
addForm.style.display = 'none';

// Load test data into library array
let test1 = new Book('Batman', 'Kevin Conroy', 35, 'read');
let test2 = new Book('Lion King', 'Disney', 100, 'not yet read');
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
        deleteBtn.addEventListener('click', (event) => {
            let index = event.target.dataset.index;
            myLibrary = myLibrary.filter(book => myLibrary.indexOf(book) != index);
            displayBooks();
        })

        let toggleCell = document.createElement('td');
        let toggleBtn = document.createElement('button');
        toggleBtn.className = 'toggleBtn';
        toggleBtn.setAttribute('data-index', index);
        toggleBtn.addEventListener('click', (event) => {
            let index = event.target.dataset.index;
            myLibrary = myLibrary.map((book, n) => {
                console.log('n:', n);
                console.log('index:', index);
                if (n != index ) {
                    return book;
                } else {
                    return book.toggleRead();
                }
            })
            displayBooks();
        })

        titleCell.appendChild(document.createTextNode(book.title))
        authorCell.appendChild(document.createTextNode(book.author))
        pagesCell.appendChild(document.createTextNode(book.pages))
        readCell.appendChild(document.createTextNode(book.read))
        deleteBtn.appendChild(document.createTextNode('Delete'))
        toggleBtn.appendChild(document.createTextNode('Toggle Read'))

        newRow.appendChild(titleCell);
        newRow.appendChild(authorCell);
        newRow.appendChild(pagesCell);
        newRow.appendChild(readCell);
        newRow.appendChild(deleteCell);
        newRow.appendChild(toggleCell);
        deleteCell.appendChild(deleteBtn);
        toggleCell.appendChild(toggleBtn);
    
        bookTable.appendChild(newRow);
    })
}

// Display Form for adding books
addButton.addEventListener('click', () => {
    addForm.style.display = 'block';
})

// Submit Book information to library, update table
submitBook.addEventListener('click', (event) => {
    event.preventDefault();

    let newBook = new Book(document.getElementById('title').value,
                           document.getElementById('author').value,
                           Number(document.getElementById('pages').value),
                           document.querySelector('input[name="readYet"]:checked').value);

    addBookToLibrary(newBook);
    displayBooks();

    addForm.style.display = 'none';
    addForm.reset();
})

// Display initial library
displayBooks();



