let myLibrary = [];
let addedBook= ""

function Book(title,author,pages,read){
    this.title= title
    this.author= author
    this.pages=pages
    this.read=read
   
}

function addBookToLibrary(title,author,pages,read) {
    addedBook= new Book(title,author,pages,read);

    myLibrary.push(addedBook)

}
addBookToLibrary("Aingkaran","Jega","23","no")
addBookToLibrary("Jenihta", "Jega","53","yes")
let newText= ""

const btn = document.querySelector('button');




for (let i=0;i<myLibrary.length; i++){
    newText= myLibrary[i]
    const bookDisplay = document.querySelector('.container');
    const bookText = document.createElement('p');
    bookText.classList.add('Book');

    bookText.textContent="Title: " + newText.title + "\r\n" 
    bookText.textContent+= "Author: " + newText.author + "\r\n"
    bookText.textContent+= "Page #: " + newText.pages + "\r\n"
    bookText.textContent+= "Read: " + newText.read + "\r\n"

    bookDisplay.appendChild(bookText)


}






