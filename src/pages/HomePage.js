import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HomePage extends Component 
{
  render()
  {
    return(
    <div className='home'>
      <h1>Добро пожаловать!</h1>
      <h2>Наш сайт - это идеальное место для настоящих книголюбов.</h2>
      <div className='descr'>
        <p>Мы предлагаем широкий ассортимент книг на любой вкус, у нас вы найдете именно то, что вам нужно. Понравившиеся книги вы можете сохранить в избранном, чтобы не потерять, а когда будете готовы их купить, добавьте их в корзину для расчета стоимости. А для того, чтобы определиться с выбором, пройдите на страницу каждой отдельной книги - там вы найдете ее описание, жанр и автора. Все для вашего удобства!</p>
      </div>
      
      <h3>На нашем сайте вы найдете несколько разделов:</h3>
      <div className='rasdels'>
        <div className='r-item'>
          <Link to="/books"><i className="bi bi-book"></i></Link>
        <div className='r-description'><b>Каталог</b><br></br>Ознакомьтесь с обширным каталогом доступных книг.</div>
        </div>
        <div className='r-item'>
          <Link to="/favorites"><i className="bi bi-suit-heart"></i></Link>
          <div className='r-description'><b>Избранное</b><br></br>Сохраните понравившиеся книги, чтобы не потерять.</div>
        </div>
        <div className='r-item'>
          <Link to="/cart"><i className="bi bi-bag"></i></Link>
          <div className='r-description'><b>Корзина</b><br></br>Добавьте книги в корзину для расчета стоимости.</div>
        </div>
      </div>
      
    </div>
    );
  }
  
}

export default HomePage;
