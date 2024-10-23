import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-300 mt-10">
      <footer className=" text-black md:flex justify-between items-center mt-14 p-3 w-11/12 mx-auto pt-10">
        <nav className="flex flex-col">
          <h6 className="footer-title">Services</h6>

          <a className="link link-hover">Fast Delivery</a>
          <a className="link link-hover"> Delicious Food</a>
          <a className="link link-hover">100% Spicy</a>
          <a className="link link-hover">Best Offer</a>
        </nav>
        <br />
        <nav className="flex flex-col">
          <h6 className="footer-title">FoodHub</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Home</a>
          <a className="link link-hover">Shop</a>
        </nav>
        <br />
        <nav className="flex flex-col">
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
      <hr />
      <footer className="footer footer-center bg-inherit text-base-content p-4">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by Abdullah Al Mamun
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
