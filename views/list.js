
import createBookTemplate from './book.js';

const createListTemplate = (books) => /*html*/ `
<ul>
    ${books.map(b => createBookTemplate(b)).join('')}
</ul>

`;

export default createListTemplate;