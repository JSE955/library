const library = document.querySelector(".library");

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
    for (book of myLibrary) {
        let row = document.createElement("tr");
        
        let titleCell = document.createElement("td");
        titleCell.textContent = book.title;
        let authorCell = document.createElement("td");
        authorCell.textContent = book.author;
        let pagesCell = document.createElement("td");
        pagesCell.textContent = book.pages;
        let readCell = document.createElement("td");
        readCell.textContent = book.read;

        row.appendChild(titleCell);
        row.appendChild(authorCell);
        row.appendChild(pagesCell);
        row.appendChild(readCell);

        library.appendChild(row);
    }
}

displayBooks();

