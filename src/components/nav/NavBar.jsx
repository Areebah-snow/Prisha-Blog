import React from 'react';
import "../nav/NavBar.css"
import {magnifying-glass} from '@heroicons/react/outline';


const navbar = () => {
  return (
    <nav className=''>
      {/* logo */}
     <div>
     <h1>Prisha</h1>
     </div>
      {/* nav menu */}
     <div className=''>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Shop</li>
        <li>Cart</li>
      </ul>
     </div>
      {/* navn icons */}
     <div className='relative'>
      <ul>
        
      </ul>
     </div>
    </nav>
  )
}

export default navbar;