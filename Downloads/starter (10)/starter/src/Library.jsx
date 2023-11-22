import React, { useState } from 'react';
import { collection } from "./collection";
import Books from './Books';

const Library = () => {
  const [books, setBooks] = useState(collection.books);

  const borrowBook = (id) => {
    // Update the availability of the book with the given id
    const updatedBooks = books.map(book => 
      book.id === id ? { ...book, available: false } : book
    );
    setBooks(updatedBooks);
  };

  const returnBook = (id) => {
    // Update the availability of the book with the given id
    const updatedBooks = books.map(book => 
      book.id === id ? { ...book, available: true } : book
    );
    setBooks(updatedBooks);
  };

  return (
    <div>
      {}
      <Books books={books} borrowBook={borrowBook} returnBook={returnBook} />
    </div>
  );
};

export default Library;
