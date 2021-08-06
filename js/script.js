let myLibrary = [];
//define function to show form on button click
const form  = document.getElementById('newBookForm');

function showForm(){
    var newBookForm = document.getElementById('newBookForm');
    if (newBookForm.style.display === 'none') {
        newBookForm.style.display = 'block';
    } else {
        newBookForm.style.display = 'none';
    };
};

//define Book constructor
function Book(title, author, pages, readStatus) {
    this.title = title
    this.author = author
    this.pages = pages
    this.readStatus = readStatus
};

//add test Books
const newBook = new Book('testTitle', 'testAuthor', '999', 'read');
const newBook2 = new Book('testTitle2', 'testAuthor2', '8888', 'read2');
const newBook3 = new Book('testTitle3', 'testAuthor3', '7777', 'read3');

//create a function to add a new book object to the myLibrary array
function addBookToLibrary(bookItem) {
    return myLibrary.push(bookItem);
};

addBookToLibrary(newBook);
addBookToLibrary(newBook2);
addBookToLibrary(newBook3);

//Create a function that loops through the array and displays each book
function displayBooks() { 
    var tBody = document.getElementById('table').getElementsByTagName('tbody')[0];
    tBody.textContent = '';
    for (let item of myLibrary) {
        row = tBody.insertRow(-1);
        // set the id of the table row as the object index
        row.dataset.key = myLibrary.indexOf(item).toString();
        for (let key in item) {
            var cell = row.insertCell(-1);
            cell.textContent = item[key];
        };

        //add a delete button to the end of each row
        var deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete book';
        deleteButton.setAttribute('class', 'tableButton');
        deleteButton.setAttribute('id', row.dataset.key)

        row.appendChild(deleteButton);
    };

    table = document.getElementById('table');
    table.addEventListener('click', (event) => {
        const isButton = event.target.nodeName === 'BUTTON';
        if (!isButton) {
            return;
        }
        console.dir(event.target.id);
    })
};

displayBooks();

// function to add event listener to submit button, and add the new book to the library
function submitForm() {
    form.addEventListener('submit', (event) => {
    event.preventDefault();

    let formTitleValue = form.title.value
    let formAuthorValue = form.author.value
    let formPagesValue = form.pages.value
    let formReadStatusValue = form.yesNo.value
    
    let newFormBook = new Book(formTitleValue, formAuthorValue, formPagesValue, formReadStatusValue);
    addBookToLibrary(newFormBook);
    console.log(myLibrary);
    displayBooks();
    });
};

submitForm();

//Create a function that allows the user to delete a book from the library
function deleteBook() { 
    var deleteIndex = 1;
    var tBody = document.getElementById('table').getElementsByTagName('tbody')[0];
    var row = tBody.rows[deleteIndex];
    var dataKey = row.dataset.key;
    myLibrary.splice(dataKey, 1);
    displayBooks();
};

//deleteBook();