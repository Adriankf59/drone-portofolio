import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto flex justify-between items-center p-5">
        <h1 className="text-xl text-black">Uber Aerials</h1>
        <ul className="flex space-x-4">
          <li className="text-black hover:text-blue-500 cursor-pointer">
            <Link href="/">Home</Link>
          </li>
          <li className="text-black hover:text-blue-500 cursor-pointer">
            <Link href="/services">Services</Link>
          </li>
          <li className="text-black hover:text-blue-500 cursor-pointer">
            <Link href="/contact">Contact</Link>
          </li>
          <li className="text-black hover:text-blue-500 cursor-pointer">
            <Link href="/blog">Blog</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;