let myLibrary = [];
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
}

function addBookToLibrary(name, author, pages, isRead = false) {
  const book = new Book(name, author, pages, isRead);
  myLibrary.push(book);
}

function listLibrary() {
  clearScreen();
  myLibrary.forEach((book, index) => {
    const li = document.createElement("li");
    li.classList.add("book-card");
    li.dataset.bookId = index;
    li.innerHTML = `
        <h2>${book.name}</h2>
        <p><span>Author:</span> ${book.author}</p>
        <p><span>Pages:</span> ${book.numberOfPages}
        
        
        `;
        // <p><label for="isRead">Read it ?<label></p>
        // <input type="checkbox" name="isRead" id="isRead-${index} class="isRead" ${book.isRead ? "checked": ""}>
    const removeButton = document.createElement("button");
    removeButton.classList.add("button");
    removeButton.classList.add("remove-button");
    removeButton.dataset.bookId = index;
    removeButton.textContent = "Remove Book";
    const checkboxDiv = document.createElement('div')
    checkboxDiv.classList.add('input-wrapper')
    checkboxDiv.classList.add('input-checkbox-wrapper')

    const label = document.createElement('label')
    label.setAttribute('for', `read-checkbox-${index}`)
    label.textContent = "Book Read ?"
    const checkbox = document.createElement('input')
    checkbox.setAttribute("type", "checkbox")
    checkbox.setAttribute("id", `read-checkbox-${index}`)
    checkbox.dataset.bookId = index

    if(book.isRead) checkbox.setAttribute('checked', true)
    checkbox.classList.add('isRead')
    checkbox.classList.add('checkbox')
    checkbox.addEventListener("change", (e)=>{
      const bookId = e.target.dataset.bookId
      e.target.checked ? myLibrary[bookId].isRead = true : myLibrary[bookId].isRead = false
    })
    checkboxDiv.appendChild(label)
    checkboxDiv.appendChild(checkbox)
    li.appendChild(checkboxDiv)
    li.appendChild(removeButton);
    bookList.appendChild(li);
    console.log(li)
   
    
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

function removeBook (e) {
    const bookId = e.target.dataset.bookId;
    console.log({ bookId });
    myLibrary.splice(bookId, 1);
    return listLibrary();
  };

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
