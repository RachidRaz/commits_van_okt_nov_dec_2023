import React from 'react';

const Book = ({ book, borrowBook, returnBook }) => {
  return (
    <div>
      <h4>{book.title}</h4>
      <p>{book.author}</p>
      {book.available ? (
        <button onClick={() => borrowBook(book.id)}>Borrow</button>
      ) : (
        <button onClick={() => returnBook(book.id)}>Return</button>
      )}
    </div>
  );
};
import React from 'react';
import Category from './Category';

const Books = ({ books, borrowBook, returnBook }) => {
  return (
    <div>
      <h2>Books {books.length}</h2>
      {}
      <Category title="Programming" books={books} borrowBook={borrowBook} returnBook={returnBook} />
    </div>
  );
};

export default Books;
