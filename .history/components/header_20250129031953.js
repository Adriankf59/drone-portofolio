// components/Header.js
import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
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
      <div
        className="bg-cover bg-center h-64 flex items-center justify-center"
        style={{ backgroundImage: "url('/images/drone1.jpeg')" }} // Adjust the path
      >
        <div className="bg-white bg-opacity-75 p-5 rounded flex flex-col items-center">
          <h2 className="text-2xl text-black font-semibold text-center">Explore the World from Above</h2>
          <button className="mt-4 py-2 px-6 bg-blue-500 text-white rounded-[10px]">Get Started</button>
        </div>
      </div>
    </header>
  );
};

export default Header;