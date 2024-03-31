const myLibrary = [];
const newBookButton = document.querySelector("#newBook");
const addNewBookButton = document.querySelector("#addNewBook");
const bookList = document.querySelector("#book-list");

const dialog = document.querySelector("dialog.book-form");
const closeModalButton = document.querySelector("#closeModal");

function Book(name, author, pages, isRead = false) {
  this.name = name;
  this.author = author;
  this.numberOfPages = pages;
  this.isRead = isRead;

  const info = () => {
    return `${this.title} by ${this.author}, ${this.numberOfPages} pages, ${
      isRead ? "Have read this book" : "not read yet"
    }`;
  };
  const renderHTML = () => {
    return;
  };
}

function addBookToLibrary(name, author, pages, isRead = false) {
  const book = new Book(name, author, pages, isRead);
  console.log(book);
  myLibrary.push(book);
  return book;
}

function listLibrary() {
  myLibrary.forEach((book) => {
    console.log(book);
    const li = document.createElement("li");
    li.classList.add("book-card");
    li.innerHTML = `
        <h2>${book.name}</h2>
        <p><span>Author:</span> ${book.author}</p>
        <p><span>Pages:</span> ${book.numberOfPages}
        ${book.isRead ? "I Have read this book" : " Not read this book yet"}</p>
        `;
    bookList.appendChild(li);
  });
}
function clearScreen() {
  bookList.textContent = "";
}
const addNewBook = (e) => {
  e.preventDefault();
  const nameInput = document.querySelector("#book-name").value;
  const authorInput = document.querySelector("#book-author").value;
  const pagesInput = document.querySelector("#book-pages").value;
  const isReadInput = document.querySelector("#book-read").value;
  addBookToLibrary(nameInput, authorInput, pagesInput, isReadInput);
  clearScreen();
  dialog.close();
  listLibrary();
};
addNewBookButton.addEventListener("click", addNewBook);
closeModalButton.addEventListener("click", (e) => {
  dialog.close();
});
const dialogOpen = (e)=>{
    console.log(e.currentTarget)
    if(e.currentTarget !== dialog){
        dialog.close()
        document.body.removeEventListener("click", dialogOpen)
    }
}
const newBook = (e) => {
  console.log(e);
  dialog.showModal();
  setTimeout(() => {
    document.body.addEventListener("click", dialogOpen)
  }, 100);
};

newBookButton.addEventListener("click", newBook);

addBookToLibrary(
  "Harry Potter and the philosopher stone",
  "JK Rolling",
  300,
  true
);
addBookToLibrary(
  "Harry Potter and the philosopher stone",
  "JK Rolling",
  300,
  true
);
addBookToLibrary(
  "Harry Potter and the philosopher stone",
  "JK Rolling",
  300,
  true
);
addBookToLibrary(
  "Harry Potter and the philosopher stone",
  "JK Rolling",
  300,
  true
);
addBookToLibrary(
  "Harry Potter and the philosopher stone",
  "JK Rolling",
  300,
  true
);
addBookToLibrary(
  "Harry Potter and the philosopher stone",
  "JK Rolling",
  300,
  true
);
addBookToLibrary(
  "Harry Potter and the philosopher stone",
  "JK Rolling",
  300,
  true
);
addBookToLibrary(
  "Harry Potter and the philosopher stone",
  "JK Rolling",
  300,
  true
);
addBookToLibrary(
  "Harry Potter and the philosopher stone",
  "JK Rolling",
  300,
  true
);
addBookToLibrary(
  "Harry Potter and the philosopher stone",
  "JK Rolling",
  300,
  true
);
addBookToLibrary(
  "Harry Potter and the philosopher stone",
  "JK Rolling",
  300,
  true
);
addBookToLibrary(
  "Harry Potter and the philosopher stone",
  "JK Rolling",
  300,
  true
);
addBookToLibrary(
  "Harry Potter and the philosopher stone",
  "JK Rolling",
  300,
  true
);
addBookToLibrary(
  "Harry Potter and the philosopher stone",
  "JK Rolling",
  300,
  true
);

listLibrary();
