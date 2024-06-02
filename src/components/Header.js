import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component 
{
  render()
  {
    return(
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/books">Books</Link>
          <Link to="/favorites">Favorites</Link>
          <Link to="/cart">Cart</Link>
        </nav>
      </header>
    );
  }
}
export default Header;