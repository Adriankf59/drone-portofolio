// components/Header.js
import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Import Next.js's Image component for better optimization

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <nav className="max-w-7xl mx-auto flex justify-between items-center p-5">
        <div className="flex items-center space-x-4">
          <Image
            src="/images/logo_uber-aerials.png" // Specify the path to your logo image
            alt="Uber Aerials Logo"
            width={400} // Adjust the width according to your needs
            height={400} // Adjust the height according to your needs
          />

        </div>
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
        style={{ backgroundImage: "url('/images/drone1.jpeg')" }} // Ensure the image path is correct
      >
        <div className="bg-white bg-opacity-75 p-5 rounded">
          <h2 className="text-2xl font-semibold">Explore the World from Above</h2>
          <button className="mt-4 py-2 px-4 bg-blue-500 text-white rounded">Get Started</button>
        </div>
      </div>
    </header>
  );
};

export default Header;