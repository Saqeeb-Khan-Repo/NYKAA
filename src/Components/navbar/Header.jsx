// import { useState } from "react";
import { BsHandbag } from "react-icons/bs";
import { IoIosSearch } from "react-icons/io";
import "./Header.css";
import { categories, sideLinks, navLinks } from "../data";
import { FaMobileScreenButton } from "react-icons/fa6";
import { IoLocation } from "react-icons/io5";
import { FaGift } from "react-icons/fa";
import { MdOutlineHelp } from "react-icons/md";

const Header = () => {
  return (
    <>
      <header className="top-header">
        <h3 className="h">Beauty and Products At Discounts</h3>
        <nav className="toplinks">
          <span>
            <FaMobileScreenButton />{" "}
          </span>
          <a href="#">Get APP</a>
          <span>
            <IoLocation />
          </span>
          <a href="#">Location</a>
          <span>
            <FaGift />{" "}
          </span>
          <a href="#">Store & Gifts</a>
          <span>
            <MdOutlineHelp />{" "}
          </span>
          <a href="#">Help</a>
        </nav>
      </header>
      <header className="header">
        <div className="header-inner">
          <img
            src="/nykaa.jpg"
            alt="Nykaa Logo"
            className="logo"
            loading="lazy"
          />

          <nav className="nav-links">
            {navLinks.map((link) =>
              link === 
              navLinks[0] ||
              navLinks[1] ||
              navLinks[2] ||
              navLinks[3] ? (
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
              ) : (
                <a key={link} href="#" className="link">
                  {link}
                </a>
              ),
            )}
          </nav>

          <div className="search">
            <IoIosSearch className="search-icon" aria-label="Search" />
            <input
              type="search"
              placeholder="Search on Nykaa"
              className="search-input"
            />
          </div>

          <button className="icon-button" aria-label="Cart">
            <BsHandbag className="bag" />
          </button>

          <button className="btn">Sign In</button>
        </div>
      </header>

      <header className="side-header">
        <nav className="sidelinks">
          {sideLinks.map((link) => (
            <a key={link} href="#" className="link">
              {link}
            </a>
          ))}
        </nav>
      </header>
    </>
  );
};

export default Header;
