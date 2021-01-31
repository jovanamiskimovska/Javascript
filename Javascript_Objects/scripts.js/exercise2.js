function Book(title, author, readStatus) {
    this.title = title;
    this.author = author;
    this.readingStatus = readStatus;
    this.readingStatusInfo = function () {
        if (this.readingStatus === "true") {
            return true;
        }
        else if (this.readingStatus === "false") {
            return false;
        }
        else {
            return null;
        }
    }
    printBookInfo(this.title, this.author, this.readingStatusInfo());
}

function printBookInfo(title, author, result) {
    if (result === true) {
        console.log(`You have already read ${title} by ${author}`)
    }
    else if (result === false) {
        console.log(`You have to read ${title} by ${author}`)
    }
    else {
        console.log("ERROR");
    }}
    
let bookTitle = document.getElementById("title");
let bookAuthor = document.getElementById("author");
let bookReadingStatus = document.getElementById("readingStatus");
let button = document.getElementById("button");

button.addEventListener("click", function () {
    let userBook = new Book(bookTitle.value, bookAuthor.value, bookReadingStatus.value);
    userBook.readingStatusInfo();
})