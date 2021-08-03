let myLibrary = [];

//define function to show form on button click

function showForm(){
    var x = document.getElementById("newBookForm");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
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
const newBook2 = new Book('testTitle2', 'testAuthor2', '9999', 'read2');


//create a function to add a new book object to the myLibrary array
function addBookToLibrary(bookItem) {
    return myLibrary.push(bookItem);
};

addBookToLibrary(newBook);
addBookToLibrary(newBook2);


//Create a function that loops through the array and displays each book
function displayBooks() {  
    var table = document.getElementById("table");
    for (let item of myLibrary) {
        row = table.insertRow(-1);
        for (let key in item) {
            var cell = row.insertCell(-1);
            cell.innerHTML = item[key];
        }
    }
};

displayBooks();
