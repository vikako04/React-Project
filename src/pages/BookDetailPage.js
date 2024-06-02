import React from 'react';
import { useParams } from 'react-router-dom';


function BookDetailPage({ books, addToCart, addToFavorites }) 
{
  const { id } = useParams();
  const book = books.find(book => book.id === parseInt(id));  

  return (
    <div className='book-about'>
      
      <div className='book-img'>
        <img src={book.img} alt='img' />
      </div>
      <div className='book-details'>
        <h1>{book.name}</h1>
        <p><span>Автор: </span>{book.author}</p>
        <p><span>Жанр: </span>{book.genre}</p>
        <p>{book.description}</p>
        <div className='price-btns'>
          <span>{book.price} KZT</span>
          <div className='btns'>
            <i class="bi bi-suit-heart-fill" onClick={() => addToFavorites(book)}></i>
            <i class="bi bi-bag-plus-fill" onClick={() => addToCart(book)}></i>
          </div>
          
        </div>
      </div>
      
    </div>
  );
}

export default BookDetailPage;
