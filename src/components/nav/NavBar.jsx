import React from "react";
import "../nav/NavBar.css";

const navbar = () => {
  return (
    <nav className="navbar flex justify-between items-center w-[100%] z-30">
      {/* logo */}
      <div className="logo ">
        <h1>
          Pri<span className="lg">sha.</span>
        </h1>
      </div>
      {/* nav menu */}
      <div className="">
        <ul className="nav-menu flex justify-between">
          <li>Home</li>
          <li>About</li>
          <li>Shop</li>
          <li>Cart</li>
        </ul>
      </div>
      {/* navn icons */}
      <div className="search_bar">
        <input type="text" placeholder="Furniture Sets"/>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-5 h-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        
      </div>
    </nav>
  );
};

export default navbar;