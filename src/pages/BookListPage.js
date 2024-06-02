import React from 'react';
import BookList from '../components/BookList';


function BookListPage ({ books }) {
  
  
    return (
      <div>
        <BookList books={books}  />
      </div>
    );
}

export default BookListPage;
