const createBookTemplate = (book) => /*html*/ `
    <li data-id="${book.id}">
        <div class="details"
        hx-get="/books/edit/${book.id}"
        hx-target="closest li"
        >
            <h3>${book.title}</h3>
            <p>${book.author}</p>
        </div>
        <button hx-delete="/books/${book.id}" 
        hx-target="closest li" 
        hx-swap="outerHTML">Delete</button>
    </li>
`;



export default createBookTemplate;