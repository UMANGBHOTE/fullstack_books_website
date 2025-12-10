let books = [
    {
        id: 1,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        image: "images/img1.jpg"
    },
    {
        id: 2,
        title: "Harper Lee",
        author: "To Kill a Mockingbird",
        image: "images/img2.jpg"
    },
    {
        id: 3,
        title: "1984",
        author: "George Orwell",
        image: "./images/img3.jpg"
    }
];

function loadBooks() {
    let container = document.getElementById("book-list");
    container.innerHTML = "";

    books.forEach(book => {
        container.innerHTML += `
            <div class="book-card">
                <img src="${book.image}" alt="${book.title}">
                <h2>${book.title}</h2>
                <p>${book.author}</p>

                <a href="update.html?id=${book.id}">
                    <button class="update-btn">Update</button>
                </a>

                <button onclick="deleteBook(${book.id})" class="delete-btn">Delete</button>
            </div>
        `;
    });
}

function deleteBook(id) {
    books = books.filter(book => book.id !== id);
    loadBooks();
}

window.onload = loadBooks;