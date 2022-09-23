let myLibrary = [];

function book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = title + " " + author + " " + pages + " " + read
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

// trying to create a loop that will add a div and html for each book
for (let i = 0; i < myLibrary.length; i++) {
    let div = document.createElement('div');
    div.className = 'book'
    document.body.appendChild(div);
    div.innerHTML = myLibrary[i].info;
}
