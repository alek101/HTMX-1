import express from 'express';
import createHomePageTemplate from './views/index.js';
import createListTemplate from './views/list.js';
import createBookTemplate from './views/book.js';
import BOOKS_DATA from './data/data.js';
import createEditFormTemplate from './views/edit.js';

// create app
const app = express();
app.use(express.urlencoded({extended: false}));

// static assets
app.use(express.static('public'));

// routes
app.get('/', (req, res) => {
  res.send(createHomePageTemplate());
});

// index
app.get('/books', (req, res) => {
  res.send(createListTemplate(BOOKS_DATA));
});

// create
app.post('/books', (req, res) => {
  console.log(req.body);
  const { title, author } = req.body;
  const id = Math.random().toString();

  BOOKS_DATA.push({ id
    , title
    , author
  });

  res.redirect(`/books/${id}`);
});

app.get('/books/:id', (req, res) => {
  const {id} = req.params;
  const book = BOOKS_DATA.find(b => b.id === id);
  res.send(createBookTemplate(book));
});

// destroy
app.delete('/books/:id', (req, res) => {
  const id = req.params.id;
  const bookIndex = BOOKS_DATA.findIndex(b => b.id === id);
  BOOKS_DATA.splice(bookIndex, 1);
  res.send();
});

// edit
app.get('/books/edit/:id', (req, res) => {
  const {id} = req.params;
  const book = BOOKS_DATA.find(b => b.id === id);
  res.send(createEditFormTemplate(book));
});

app.put('/books/:id', (req, res) => {
  const {id} = req.params;
  const book = BOOKS_DATA.find(b => b.id === id);
  const {title, author} = req.body;
  book.title = title;
  book.author = author;
  res.send(createBookTemplate(book));
}); 

// search
app.post('/books/search', (req, res) => {
  const text = req.body.search.toLowerCase();
  const books = BOOKS_DATA.filter(b => b.title.toLowerCase().includes(text) || b.author.toLowerCase().includes(text));
  //console.log(books, text);
  res.send(createListTemplate(books));
});

// listen to port
app.listen(3000, () => {
  console.log('App listening on port 3000');
});