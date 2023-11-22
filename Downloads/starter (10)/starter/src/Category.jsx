import React from 'react';
import Book from './Book';

const Category = ({ title, books, borrowBook, returnBook }) => {
  return (
    <div>
      <h3>{title} ({books.length})</h3>
      {}
      {books.map((book) => (
        <Book key={book.id} book={book} borrowBook={borrowBook} returnBook={returnBook} />
      ))}
    </div>
  );
};