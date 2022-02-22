'use strict';

let myLibrary = [];
//define function to show form on button click
const form = document.getElementById('newBookForm');
const showBookButton = document.getElementById('showBookButton');
const newBookForm = document.getElementById('newBookForm');

newBookForm.style.display = 'none';

function showForm() {
  if (newBookForm.style.display === 'none') {
    newBookForm.style.display = 'block';
    showBookButton.textContent = 'Hide form';
  } else {
    newBookForm.style.display = 'none';
    showBookButton.textContent = 'Add a new book';
  }
}

//define Book class
class Book {
  constructor(title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
  }
}

// add function to toggle the read status of the Book prototype instance
function toggleReadStatus(selectedBook) {
  if (selectedBook.readStatus === 'Yes') {
    selectedBook.readStatus = 'No';
  } else {
    selectedBook.readStatus = 'Yes';
  }
}

//add test Books
const newBook = new Book('testTitle', 'testAuthor', '999', 'Yes');
const newBook2 = new Book('testTitle2', 'testAuthor2', '8888', 'No');
const newBook3 = new Book('testTitle3', 'testAuthor3', '7777', 'Yes');

//create a function to add a new book object to the myLibrary array
function addBookToLibrary(bookItem) {
  return myLibrary.push(bookItem);
}

addBookToLibrary(newBook);
addBookToLibrary(newBook2);
addBookToLibrary(newBook3);

//Create a function that loops through the array and displays each book
function displayBooks() {
  var tBody = document.getElementById('table').getElementsByTagName('tbody')[0];
  tBody.textContent = '';
  for (let item of myLibrary) {
    var row = tBody.insertRow(-1);
    // set the id of the table row as the object index
    row.dataset.key = myLibrary.indexOf(item).toString();
    for (let key in item) {
      var cell = row.insertCell(-1);
      cell.textContent = item[key];
    }
    //add a read button to the end of each row
    var readToggle = document.createElement('INPUT');
    readToggle.setAttribute('type', 'checkbox');
    readToggle.setAttribute('class', 'readToggle');
    readToggle.setAttribute('id', row.dataset.key);

    cell.appendChild(readToggle);

    //add a delete button to the end of each row
    var deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete book';
    deleteButton.setAttribute('class', 'deleteButton');
    deleteButton.setAttribute('id', row.dataset.key);

    row.appendChild(deleteButton);
  }
}

displayBooks();

//add event listeners to all table buttons
var table = document.getElementById('table');
table.addEventListener('click', (event) => {
  const isButton = event.target.nodeName === 'BUTTON';
  let rowId = event.target.id;
  if (event.target.className === 'readToggle') {
    toggleReadStatus(myLibrary[rowId]);
    displayBooks();
  } else if (event.target.className === 'deleteButton') {
    let rowId = event.target.id;
    deleteBook(rowId);
    console.log(myLibrary);
  } else {
    console.log(event.target.className);
  }
});

//add form validity checks

const pages = document.getElementById('pages');

pages.addEventListener('input', function (event) {
  if (pages.validity.rangeOverflow) {
    pages.setCustomValidity('Too many pages! (must be <10,000)');
    pages.reportValidity();
  } else {
    pages.setCustomValidity('');
  }
});

// function to add event listener to submit button, and add the new book to the library
function submitForm() {
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    let formTitleValue = form.title.value;
    let formAuthorValue = form.author.value;
    let formPagesValue = form.pages.value;
    let formReadStatusValue = form.yesNo.value;

    let newFormBook = new Book(
      formTitleValue,
      formAuthorValue,
      formPagesValue,
      formReadStatusValue
    );
    addBookToLibrary(newFormBook);
    displayBooks();
  });
}

submitForm();

//Create a function that allows the user to delete a book from the library
function deleteBook(deleteIndex) {
  var tBody = document.getElementById('table').getElementsByTagName('tbody')[0];
  var row = tBody.rows[deleteIndex];
  var dataKey = row.dataset.key;
  myLibrary.splice(dataKey, 1);
  displayBooks();
}
