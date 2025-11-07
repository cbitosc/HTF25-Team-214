from flask import Flask, request, jsonify
from flask_cors import CORS  # Allows frontend JS to call backend

app = Flask(__name__)
CORS(app)  # Enable cross-origin requests

# Temporary storage for books
books = []

# Home route (optional)
@app.route('/')
def home():
    return "Book Exchange Backend Running!"

# Add a book
@app.route('/add_book', methods=['POST'])
def add_book():
    data = request.json
    books.append(data)
    return jsonify({"message": "Book added successfully!"})

# Get all books
@app.route('/books', methods=['GET'])
def get_books():
    return jsonify(books)

if __name__ == '__main__':
    app.run(debug=True)
