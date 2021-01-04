import React from "react";
import {Link} from "react-router-dom";
import Logo  from "../../assets/favicon.ico";
import "./Header.scss";

function Header() {
   
  return (
    <div className="header">
    
      <Link className='logo-container' to="/">
        <img src={Logo} className="logo" />
      </Link>
      <div className='options'>
        <Link className='option' to='/shop'>
        SHOP
        </Link>
        <Link className='option' to='/shop'>
        CONTACTS
        </Link>
      </div>
    </div>
  );
}

export default Header;
