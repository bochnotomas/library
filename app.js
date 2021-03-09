const listOfBooks = document.querySelector(".library")
const popup = document.querySelector(".popup")
let myLibrary = []
let book

//adding array to local Storage


//book object
function Book(author, title, numberOfPages, read) {
    this.author = author
    this.title = title
    this.numberOfPages = numberOfPages
    this.read = read
}

//popup form code
function toggleForm() {
    popup.classList.toggle("hidden")
}


//form validation
const form = document.querySelector("#addBook")
const title = document.querySelector("#title")
const author = document.querySelector("#author")
const pages = document.querySelector("#pages")


form.addEventListener("submit", e => {
    e.preventDefault();

    addBookToLibrary(author.value, title.value, pages.value, false)
    displayLibrary()
    toggleForm()
})

//adding a book object to library array function
function addBookToLibrary(author, title, n) {
    book = new Book(author, title, n, false)
    myLibrary.unshift(book)
}

//removing a book
function removeBookFromLibrary(data) {
    delete myLibrary[data]
    displayLibrary()
}


//dummy data
addBookToLibrary("In Search of Lost Time", "Marcel Proust", 200)
addBookToLibrary("Ulysses", "James Joyce", 300)
addBookToLibrary("Don Quixote", "Miguel de Cervantes", 400)


//displaying list of books
function displayLibrary() {
    listOfBooks.innerHTML = ""
    myLibrary.forEach((book, index) => {
        listOfBooks.innerHTML += `<div class="book"> <h1>${book.title}</h1> <h2>${book.author}</h2> <p>${book.numberOfPages}pg</p> <img onclick="removeBookFromLibrary(${index})" src="/assets/images/dust-bin-pngrepo-com.png" alt="bin"> <input type="checkbox" onclick="changeRead(${index})"> </div>`
    })
}


//changing read state
function changeRead(index) {
    let book = myLibrary[index]
    if (book.read) {
        book.read = false
    } else {
        book.read = true
    }
}

displayLibrary()