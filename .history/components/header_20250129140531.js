// components/Header.js
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

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
        className="flex items-center justify-center"
        style={{
          backgroundImage: "url('/images/DJI_0595.JPG')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "400px",
          width: "100%",
        }}
      >
        <motion.div
          className="bg-white bg-opacity-75 p-5 rounded flex flex-col items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2
            className="text-2xl text-black font-semibold text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Explore the World from Above
          </motion.h2>
          <motion.button
            className="mt-4 py-2 px-6 bg-blue-500 text-white rounded-[15px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Get Started
          </motion.button>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;