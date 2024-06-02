import React from 'react';
import BookCard from '../components/BookCard';

function FavoritesPage({ favorites, removeFromFavorites, addToCart }) {
  return (
    <div className='favorites-page'>
      
      {favorites.length === 0 ? (
        <p>Ваш список избранного пуст.</p>
      ) : (
        <div className='books-container'>
          {favorites.map(book => (
            <div key={book.id} className='favorite-item'>
              <BookCard book={book} />
              <div className='favorites-item-actions'>
                <i class="bi bi-trash-fill" onClick={() => removeFromFavorites(book.id)}></i>
                <i class="bi bi-bag-plus-fill" onClick={() => addToCart(book)}></i>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
export default FavoritesPage;
