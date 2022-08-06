const myLibrary = [];
let addedBook= ""
let newText= ""

function Book(title,author,pages,read){
    this.title= title
    this.author= author
    this.pages=pages
    this.read=read
   
}

function addBookToLibrary(title,author,pages,read) {
    addedBook= new Book(title,author,pages,read);

    myLibrary.push(addedBook)
    return addedBook
}


const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
const read = document.querySelector('#read');
const bookDisplay = document.querySelector('.container');

const btn = document.querySelector('button');




btn.addEventListener('click', ()=>{
  
    
    addBookToLibrary(title.value, author.value,pages.value,read.checked)

    newText= myLibrary[myLibrary.length-1]
    const cardContainer = document.createElement('div');
    cardContainer.classList.add('cardContainer');
    const cardDisplay = document.querySelector('.cardContainer');
    
    cardContainer.setAttribute("id", (myLibrary.length-1))


    const titleText = document.createElement('div');
    titleText.classList.add('text-card');
    titleText.textContent="Title: " + newText.title  


    const authorText = document.createElement('div');
    authorText.classList.add('text-card');
    authorText.textContent= "Author: " + newText.author 


    const pagesText = document.createElement('div');
    pagesText.classList.add('text-card');
    pagesText.textContent= "Page #: " + newText.pages 


    const readText = document.createElement('div');
    readText.classList.add('text-card');
    readText.classList.add('read-text'+(myLibrary.length-1));

    readText.setAttribute("value", (myLibrary.length-1))
    readText.textContent= "Read: " + newText.read 



    const deleteCard= document.createElement('button')
    deleteCard.classList.add('deleteBtn');
    deleteCard.setAttribute("value", (myLibrary.length-1))
    deleteCard.textContent= "Trash" 

    const readBtn= document.createElement('button')
    readBtn.classList.add('readStatus');
    readBtn.setAttribute("value", (myLibrary.length-1))
    readBtn.textContent= "Read?" 



    bookDisplay.appendChild(cardContainer)
    cardContainer.appendChild(titleText)
    cardContainer.appendChild(authorText)
    cardContainer.appendChild(pagesText)
    cardContainer.appendChild(readText)
    cardContainer.appendChild(readBtn)
    cardContainer.appendChild(deleteCard)

    const deleteBtn = document.querySelectorAll('.deleteBtn');
    deleteBtn.forEach((button)=>{

        button.addEventListener('click', (e)=>{
            const cardDelete= document.getElementById(e.target.value)
            
            cardDelete.remove()

            })
    })

    const readStatusBtn = document.querySelectorAll('.readStatus');
    readStatusBtn.forEach((button)=>{

        button.addEventListener('click', (e)=>{
            const changeRead= document.querySelector('.read-text'+e.target.value)
            if (myLibrary[e.target.value].read==true){
                myLibrary[e.target.value].read=false
                
                changeRead.textContent= "Read: False"



            }
            else{
                myLibrary[e.target.value].read=true
                changeRead.textContent= "Read: True"
            }

            })
    })
    



})



