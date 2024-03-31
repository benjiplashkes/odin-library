const myLibrary = []

function Book(name, author, pages, isRead = false){
    this.name = name;
    this.author = author;
    this.numberOfPages = pages;
    this.isRead = isRead;

    const info = ()=> {
        return `${this.title} by ${this.author}, ${this.numberOfPages} pages, ${isRead ? "Have read this book" : "not read yet"}`
    }
}

function addBookToLibrary(book){
    console.log(book)
    myLibrary.push(book)
    return 
    
}