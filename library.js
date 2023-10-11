

async function fetchBooks() {
    try {
        const response = await fetch('https://striveschool-api.herokuapp.com/books');
        const data = await response.json();

        if (response.ok) {
            displayBooks(data);
        } else {
            console.error('Failed to fetch data');
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

function displayBooks(books) {
    const bookList = document.getElementById('bookList');

    books.forEach(book => {
        const col = document.createElement('div');
        col.classList.add('col-md-3', 'mb-4');

        const card = document.createElement('div');
        card.classList.add('card');

        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');


        const newimg = document.createElement("img");
        newimg.src = book.img; 
        newimg.classList.add("img-fluid");

        const title = document.createElement('h5');
        title.classList.add('card-title');
        title.textContent = book.title;

        const author = document.createElement('p');
        author.classList.add('card-text');
        author.textContent = `Author: ${book.author}`;

        const discardButton = document.createElement('button');
        discardButton.classList.add('btn', 'btn-danger');
        discardButton.textContent = 'Discard';
        discardButton.addEventListener('click', () => {
           
            card.remove();
        });

        cardBody.appendChild(title);
        cardBody.appendChild(author);
        cardBody.appendChild(discardButton); 
        card.appendChild(cardBody);
        col.appendChild(card);
        bookList.appendChild(col);
        cardBody.appendChild(newimg); 
    });
}

fetchBooks();
