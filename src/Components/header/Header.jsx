import { BsHandbag } from "react-icons/bs";
import { IoIosSearch } from "react-icons/io";
import "./Header.css";
import { categories, sideLinks, navLinks } from "../data";
import { FaMobileScreenButton } from "react-icons/fa6";
import { IoLocation } from "react-icons/io5";
import { FaGift } from "react-icons/fa";
import { MdOutlineHelp } from "react-icons/md";
import { useState } from "react";
import ProductCart from "../Cart/ProductCart";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="top-header">
        <h3 className="h">Beauty and Products At Discounts</h3>
        <nav className="toplinks">
          <span>
            <FaMobileScreenButton />
          </span>
          <a href="#">Get APP</a>
          <span>
            <IoLocation />
          </span>
          <a href="#">Location</a>
          <span>
            <FaGift />
          </span>
          <a href="#">Store & Gifts</a>
          <span>
            <MdOutlineHelp />
          </span>
          <a href="#">Help</a>
        </nav>
      </header>

      <header className="header">
        <div className="header-inner">
          <img src="/nykaa.jpg" alt="Nykaa Logo" className="logo" />

          <nav className="nav-links">
            {navLinks.slice(0, 4).map((link) => (
              <div className="popup-container" key={link}>
                <a href="#" className="link">
                  {link}
                </a>
                <div className="menu">
                  {categories.map((item, i) => (
                    <a href="#" key={i}>
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            ))}
            {navLinks.slice(4).map((link) => (
              <a key={link} href="#" className="link">
                {link}
              </a>
            ))}
          </nav>

          <div className="search">
            <IoIosSearch className="search-icon" />
            <input
              type="search"
              placeholder="Search on Nykaa"
              className="search-input"
            />
          </div>

          <div>
            <button className="btn">Sign In</button>
            <button
              className={`icon-button ${isOpen ? "open" : ""}`}
              aria-label="Toggle cart"
              onClick={() => setIsOpen((prev) => !prev)}
            >
              <BsHandbag className="bag" />
            </button>
          </div>
        </div>
        {/* Fixed: Moved inside .header */}
        <div className="side-header">
          <nav className="sidelinks">
            {sideLinks.map((link) => (
              <div className="popup-container" key={link}>
                <a href="#" className="link">
                  {link}
                </a>
                <div className="menu">
                  {/* Add side menu items here */}
                  <a href="#">Option 1</a>
                  <a href="#">Option 2</a>
                </div>
              </div>
            ))}
          </nav>
        </div>
      </header>

      {isOpen && (
        <>
          <div className="cart-overlay open" onClick={() => setIsOpen(false)} />
          <ProductCart setIsOpen={setIsOpen} />
        </>
      )}
    </>
  );
};

export default Header;
