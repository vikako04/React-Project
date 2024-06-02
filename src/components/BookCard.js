import React from 'react';
import { Link } from 'react-router-dom';

function BookCard({ book }) 
{
  return (
    <div className='book-card'>
      <Link to={`/book/${book.id}`}><img src={book.img} alt='img' /></Link>
      <p><b>{book.price} KZT</b></p>
    </div>
  
  );
}

export default BookCard;