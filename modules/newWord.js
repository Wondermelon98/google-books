const newWord = () => {
    let genre = document.querySelector('.main__title--cycling');
    const words = ['Adventure', 'Tragedy', 'Drama', 'Comedy', 'Biopic', 'Recipe', 'Poem'];
    const randomWord = Math.floor(Math.random() * words.length);
    genre.innerHTML = words[randomWord];
}



export default newWord

