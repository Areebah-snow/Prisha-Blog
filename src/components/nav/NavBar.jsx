import React from "react";
import "../nav/NavBar.css";

const navbar = () => {
  let Links = [
    { name: "Home", link: "/" },
    { name: "About", link: "/" },
    { name: "Shop", link: "/" },
    { name: "Cart", link: "/" },
  ];
  return (
    <nav className="navbar shadow-md flex fixed left-0 top-0  bg-white/100 mx-auto px-6">
      {/* logo */}
      <div className="logo ">
        <h1>
          Pri<span className="lg">sha.</span>
        </h1>
      </div>
      {/* nav menu */}
      <div className="">
        <ul className="nav-menu flex justify-between">
          {/* <li>Home</li>
          <li>About</li>
          <li>Shop</li>
          <li>Cart</li> */}
          {Links.map((Link) => (
            <li>
              <a href={Link.link}>{Link.name}</a>
            </li>
          ))}
        </ul>
      </div>
      {/*search box */}
      <div className="search_bar">
        <input type="text" placeholder="Furniture Sets" />
        <svg
          className="si"
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
