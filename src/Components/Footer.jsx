import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          {/* Company Info */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">GlamStore</h3>
            <p className="text-gray-400 mb-4">Your go-to store for the latest fashion trends.</p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                <FaFacebookF className="text-xl" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                <FaTwitter className="text-xl" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                <FaInstagram className="text-xl" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                <FaLinkedinIn className="text-xl" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col md:flex-row md:space-x-8 mb-6 md:mb-0">
            <div>
              <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
              <ul>
                <li><Link to="/" className="hover:underline">Home</Link></li>
                <li><Link to="/shop" className="hover:underline">Shop</Link></li>
                <li><Link to="/about" className="hover:underline">About Us</Link></li>
                <li><Link to="/contact" className="hover:underline">Contact</Link></li>
              </ul>
            </div>
            <div className="mt-6 md:mt-0">
              <h4 className="text-lg font-semibold mb-2">Customer Service</h4>
              <ul>
                <li><Link to="/returns" className="hover:underline">Returns</Link></li>
                <li><Link to="/shipping" className="hover:underline">Shipping Info</Link></li>
                <li><Link to="/faq" className="hover:underline">FAQ</Link></li>
              </ul>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Subscribe to Our Newsletter</h4>
            <form className="flex flex-col md:flex-row">
              <input
                type="email"
                placeholder="Your email address"
                className="p-2 mb-2 md:mb-0 md:mr-2 rounded-md outline-none text-black"
                required
              />
              <button
                type="submit"
                className="bg-secondary text-white px-4 py-2 rounded-md hover:bg-secondary-dark transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Contact Information */}
        <div className="text-center mt-8">
          <p className="text-gray-400 text-sm">123 Fashion St, Style City, ST 12345</p>
          <p className="text-gray-400 text-sm">+1 (234) 567-8901</p>
          <p className="text-gray-400 text-sm">info@glamstore.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
