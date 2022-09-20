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

function addNewBook(){
    
}