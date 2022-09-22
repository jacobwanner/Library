let myLibrary = [];

function book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function() {
        console.log(title, author, pages, read)
    }
}

const theHobbit = new book('The Hobbit', 'J.R.R. Tolkien', '295 pages', 'read')
const theLOTR1 = new book("The Fellowship of the Ring (The Lord of the Rings, Book 1)", "J.R.R. Tolkien", "549", "read")
const theLOTR2 = new book("The Two Towers (The Lord of the Rings, Book 2)", "J.R.R. Tolkien", "485", "read")
const theLOTR3 = new book("The Return of the King (The Lord of the Rings, Book 3)", "J.R.R. Tolkien", "578", "read")

function addBookToLibrary(){
    myLibrary.push(theHobbit, theLOTR1, theLOTR2, theLOTR3)
}
addBookToLibrary()
console.log(myLibrary)
