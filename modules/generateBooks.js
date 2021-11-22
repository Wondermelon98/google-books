let generateBooks = (preview, thumbnail, title, authors) => {
    return `
    <div class="card">
      <div class="card__image">
        <a href="${preview}" target="_blank">
            <img class="card__thumbnail" src=${thumbnail} alt="${title}" />
        </a>
      </div>
      <div class="card__content">
        <p class="card__content__title">${title}</p>
        <p class="card__content__author">
          Author(s): ${authors}
        </p>
      </div>
    </div>
`
}

export default generateBooks;