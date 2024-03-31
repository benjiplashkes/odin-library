const myLibrary = []
const newBookButton = document.querySelector('#newBook')
const addNewBookButton = document.querySelector('#addNewBook')
const bookList = document.querySelector('#book-list')
const form = document.querySelector('#book-form')



function Book(name, author, pages, isRead = false){
    this.name = name;
    this.author = author;
    this.numberOfPages = pages;
    this.isRead = isRead;

    const info = ()=> {
        return `${this.title} by ${this.author}, ${this.numberOfPages} pages, ${isRead ? "Have read this book" : "not read yet"}`
    }
    const renderHTML = ()=>{
        return 
    }
}

function addBookToLibrary(name, author, pages, isRead = false){
    const book = new Book(name, author, pages, isRead)
    console.log(book)
    myLibrary.push(book)
    return book    
}

function listLibrary(){
    myLibrary.forEach(book=>{
        console.log(book)
        const li = document.createElement('li')
        li.classList.add('book-card')
        li.innerHTML = `
        <h2>${book.name}</h2>
        <p>Author: ${book.author}</p>
        <p>Pages: ${book.pages}</p>
        <p>${book.isRead ? "I Have read this book" : " Not read this book yet"}</p>
        `
        bookList.appendChild(li)
    })
    
}
function clearScreen(){
    bookList.textContent = ""
}
const addNewBook = (e)=> {
        e.preventDefault()
        const nameInput = document.querySelector('#book-name').value
        const authorInput = document.querySelector('#book-author').value
        const pagesInput = document.querySelector('#book-pages').value
        const isReadInput = document.querySelector('#book-read').value
        addBookToLibrary(nameInput, authorInput, pagesInput, isReadInput)
        clearScreen()
        newBookButton.textContent = "New Book"
        form.classList.add('hidden')
        form.ariaHidden ? false : true

        listLibrary()

    }
addNewBookButton.addEventListener("click", addNewBook)

const newBook = ()=>{
    newBookButton.textContent = 'New Book' ? 'Close form' : 'New Book'
    form.classList.toggle('hidden')
    form.ariaHidden ? false : true
    }
newBookButton.addEventListener("click", newBook)

addBookToLibrary('Harry Potter and the philosopher stone', "JK Rolling", 300, true)
listLibrary()

