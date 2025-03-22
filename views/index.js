const createHomePageTemplate = () => {
    return /*html*/`
    <!DOCTYPE html>
        <html>
            <head>
            <title>My Reading List</title>
            <script src="https://unpkg.com/htmx.org@2.0.4" integrity="sha384-HGfztofotfshcF7+8n44JQL2oJmowVChPTg48S+jvZoztPfvwD79OC/LTtG6dMp+" crossorigin="anonymous"></script>
            <link rel="stylesheet" href="/styles.css">
            </head>
            <body>
            <header>
                <h1>My Reading List</h1>
            </header>

            <main>
                <div class="search" style="TEXT-ALIGN:CENTERe;">
                    <input type="search" placeholder="Search books..." name="search"
                    hx-post="books/search" hx-trigger="keyup changed delay:300ms"
                    hx-target=".book-list" 
                    >
                </div>
                <div class="book-list">
                  <button hx-get="/books" 
                  hx-target=".book-list"
                  >Show Books</button>

                </div>

                <div class="add-book-form">
                <h2>What do you want to read?</h2>
                <form
                hx-post="/books" hx-target=".book-list ul" hx-swap="beforeend" 
               
                    hx-on:htmx:after-request="document.querySelector('form').reset()"
                   >
                    <input type="text" name="title" placeholder="Book title" required>
                    <input type="text" name="author" placeholder="Author" required>
                    <button 
                    
                    >Add Books</button>
                </form>
                </div>
            </main>
            </body>
        </html>
  `;
};

export default createHomePageTemplate;
