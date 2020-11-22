import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav>
        <ul>
          <li className="home"><Link to={'/'}>Home</Link></li>
          <li className="search"><Link to={'/search'}>Search</Link></li>
          <li className="results"><Link to={'/results'}>Results</Link></li>
          <li className="signIn"><Link to={'#'}>Sign In</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
