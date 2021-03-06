let myLibrary = []
let book

function Book(author, title, numberOfPages, read) {
    this.author = author
    this.title = title
    this.numberOfPages = numberOfPages
    this.read = read
}

function addBookToLibrary(author, title, n) {
    book = new Book(author, title, n, false)
    myLibrary.push(book)
}


addBookToLibrary("In Search of Lost Time", "Marcel Proust", 200)
addBookToLibrary("Ulysses", "James Joyce", 300)
addBookToLibrary("Don Quixote", "Miguel de Cervantes", 400)

