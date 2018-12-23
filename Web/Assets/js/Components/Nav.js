import React from 'react';
import { Link } from 'react-router-dom';


const Nav = () => {
  return (
    <nav>
      <div className="logo">
        <h1 className="shop-logo">ReShop</h1>
      </div>
      <ul className="navigation-list">
        <li className="navigation-item">
          <Link className='navigation-link' to={{ pathname: '/' }}>Home</Link>
        </li>
        <li className="navigation-item">
        <Link className='navigation-link' to={{ pathname: '/about' }}>Men Wear</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
