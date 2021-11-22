import generateBooks from "./modules/generateBooks.js";
import getBooks from "./modules/getBooks.js";
import openModal from "./modules/openModal.js";
import closeModal from "./modules/closeModal.js";
import newWord from "./modules/newWord.js";

let bookContainer = document.querySelector(".modal__grid");
let searchBooks = document.querySelector(".main__search-bar");
let searchButton = document.querySelector(".main__btn");
let exitButton = document.querySelector(".modal__exit");
let searchText = document.querySelector(".modal__result-text");


const GOOGLEBOOKS = 'https://www.googleapis.com/books/v1/volumes?q=';


bookContainer.addEventListener("wheel", (event) => {
    event.preventDefault();
    bookContainer.scrollLeft += event.deltaY;
});

exitButton.addEventListener('click', (event) => {
    closeModal();
})

searchButton.addEventListener('click', async (event) => {
    event.preventDefault();
    const booksQuery = searchBooks.value;
    openModal();
    const books = await getBooks(GOOGLEBOOKS, booksQuery);
    const booksList = books.map((book) => {
        const preview = book.volumeInfo.previewLink;
        const thumbnail = book.volumeInfo.imageLinks?.thumbnail ?? "NO PICTURE PROVIDED";
        const authors = book.volumeInfo.authors;
        const title = book.volumeInfo.title;
        return generateBooks(preview, thumbnail, title, authors);
    });
    bookContainer.innerHTML = booksList.join('');
    searchText.textContent = `Showing results for: ${booksQuery}`;
})

searchBooks.addEventListener('keyup', async (event) => {
    if (event.keyCode === 13) {
        event.preventDefault();
        searchButton.click();
    }
})


setInterval(newWord, 1000);


  




