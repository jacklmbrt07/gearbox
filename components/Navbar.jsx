import React from "react";
import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <p>
        <Link href={"/"}>
          <button type="button" className="cart-icon" onClick="">
            <AiOutlineShopping />
            <span className="cart-item-qty">3</span>
          </button>
        </Link>
      </p>
    </div>
  );
};

export default Navbar;
