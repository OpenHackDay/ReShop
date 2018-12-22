import React from 'react';
import { Link } from 'react-router-dom';


const Nav = () => {
  return (
    <nav>
      <Link to={{pathname: '/'}}>Home</Link>
      <Link to={{pathname: '/about'}}>About</Link>
    </nav>
  );
}

export default Nav;
