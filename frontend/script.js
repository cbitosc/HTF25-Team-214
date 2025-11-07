// Add book
const bookForm = document.getElementById("bookForm");
if (bookForm) {
  bookForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const book = {
      title: document.getElementById("title").value,
      author: document.getElementById("author").value,
      genre: document.getElementById("genre").value,
      location: document.getElementById("location").value
    };

    fetch("http://127.0.0.1:5000/add_book", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(book)
    })
    .then(res => res.json())
    .then(data => {
      alert(data.message);
      bookForm.reset();
    });
  });
}

// View books
const booksContainer = document.getElementById("booksContainer");
if (booksContainer) {
  fetch("http://127.0.0.1:5000/books")
    .then(res => res.json())
    .then(books => {
      booksContainer.innerHTML = "";
      if (books.length === 0) {
        booksContainer.innerHTML = "<p>No books available yet.</p>";
      } else {
        books.forEach(b => {
          booksContainer.innerHTML += `
            <div class="book-card">
              <h3>${b.title}</h3>
              <p><strong>Author:</strong> ${b.author}</p>
              <p><strong>Genre:</strong> ${b.genre}</p>
              <p><strong>Location:</strong> ${b.location}</p>
            </div>
          `;
        });
      }
    });
}
