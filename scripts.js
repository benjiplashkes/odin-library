const myLibrary = [];
const modalButton = document.querySelector("#openModal");
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
  myLibrary.push(book);
}

function listLibrary() {
  myLibrary.reverse().forEach((book) => {
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
  const inputs = document.querySelectorAll(".input-wrapper input");
  const nameInput = document.querySelector("#book-name");
  const authorInput = document.querySelector("#book-author");
  const pagesInput = document.querySelector("#book-pages");
  const isReadInput = document.querySelector("#book-read");

  e.preventDefault();

  if (
    !nameInput.validity.valid &&
    !authorInput.validity.valid &&
    !pagesInput.validity.valid
  ) {
    dialog.showModal();
    nameInput.focus();
    return;
  }

  addBookToLibrary(
    nameInput.value,
    authorInput.value,
    pagesInput.value,
    isReadInput.value
  );
  clearScreen();
  dialog.close();
  listLibrary();
  inputs.forEach((input) => (input.value = ""));
};
addNewBookButton.addEventListener("click", addNewBook);
closeModalButton.addEventListener("click", (e) => {
  dialog.close();
});

const openModalButton = (e) => {
  dialog.showModal();
};

modalButton.addEventListener("click", openModalButton);

addBookToLibrary(
  "Harry Potter and the philosopher stone",
  "JK Rolling",
  300,
  true
);

addBookToLibrary("Whispers in the Mist", "Evelyn Harper", 432);
addBookToLibrary("The Enigma of Echo Falls", "Samuel Rivers", 589);
addBookToLibrary("Midnight Serenade", "Isabella Stone", 312);
addBookToLibrary("The Forgotten Labyrinth", "Lucas Blackwood", 726);
addBookToLibrary("Crimson Skies", "Aria Montgomery", 478);
addBookToLibrary("The Quantum Paradox", "Oliver Grayson", 645);
addBookToLibrary("Echoes of Eternity", "Sophia Lawson", 521);
addBookToLibrary("Sapphire Dreams", "Natalie Bennett", 389);
addBookToLibrary("The Celestial Cipher", "Elijah Reed", 572);
addBookToLibrary("Whirlwind Chronicles", "Grace Mitchell", 703);

listLibrary();
