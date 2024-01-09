import React from 'react';
import "../nav/NavBar.css"
// import {magnifying-glass} from '@heroicons/react/outline';


const navbar = () => {
  return (
    <nav className='navbar flex justify-between items-center w-[100%] z-30'>
      {/* logo */}
     <div className='logo '>
     <h1>Pri<span className='lg'>sha.</span></h1>
     </div>
      {/* nav menu */}
     <div className=''>
      <ul className='nav-menu flex justify-between'>
        <li>Home</li>
        <li>About</li>
        <li>Shop</li>
        <li>Cart</li>
      </ul>
     </div>
      {/* navn icons */}
     <div className='nav-icon relative'>
      <ul>
        
      </ul>
     </div>
    </nav>
  )
}

export default navbar;