import React from 'react';
import BookCard from '../components/BookCard';

function CartPage({ cart, removeFromCart, updateCartQuantity }) 
{
  const totalPrice = cart.reduce((total, book) => total + book.price * book.quantity, 0);

  const handleQuantityChange = (bookId, event) => {
    const newQuantity = parseInt(event.target.value);
    updateCartQuantity(bookId, newQuantity);
  };

  return (
    <div className='cart-page'>
      
      {cart.length === 0 ? (
        <p>Ваша корзина пуста.</p>
      ) : (
        <div className='books-container'>
          {cart.map(book => (
            <div key={book.id} className='favorite-item'>
              <BookCard book={book} />
              <div className='favorite-item-actions'>
                <i class="bi bi-trash-fill" id='cart' onClick={() => removeFromCart(book.id)}></i>
                <input type="number" value={book.quantity} onChange={(e) => handleQuantityChange(book.id, e)} min="1"/>
              </div>
            </div>
          ))}
        </div>
        
      )}
      <h2>Общая стоимость: {totalPrice} KZT</h2>
    </div>
  );
}

export default CartPage;