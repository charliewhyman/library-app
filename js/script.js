let myLibrary = [];

//define function to show form on button click

function showForm(){
    var x = document.getElementById('newBookForm');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
};

//define Book constructor
function Book(title, author, pages, readStatus) {
    this.title = title
    this.author = author
    this.pages = pages
    this.readStatus = readStatus
};

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
        }

        //add a delete button to the end of each row
        var deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete book';
        deleteButton.setAttribute('class', '')
        row.appendChild(deleteButton);
    }
};

displayBooks();

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

