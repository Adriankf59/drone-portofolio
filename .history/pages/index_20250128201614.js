// pages/index.js
import Image from 'next/image';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div>
      <header className="bg-white shadow-md">
        <nav className="max-w-7xl mx-auto flex justify-between items-center p-5">
          <h1 className="text-xl font-bold">Uber Aerials</h1>
          <ul className="flex space-x-4">
            <li className="hover:text-blue-500 cursor-pointer">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:text-blue-500 cursor-pointer">
              <Link href="/services">Services</Link>
            </li>
            <li className="hover:text-blue-500 cursor-pointer">
              <Link href="/contact">Contact</Link>
            </li>
            <li className="hover:text-blue-500 cursor-pointer">
              <Link href="/blog">Blog</Link>
            </li>
          </ul>
        </nav>
        <div
          className="bg-cover bg-center h-64 flex items-center justify-center"
          style={{ backgroundImage: "url('/path_to_your_hero_image')" }} // Adjust the path
        >
          <div className="bg-white bg-opacity-75 p-5 rounded">
            <h2 className="text-2xl font-semibold">Explore the World from Above</h2>
            <button className="mt-4 py-2 px-4 bg-blue-500 text-white rounded">Get Started</button>
          </div>
        </div>
      </header>

      {/* Similar changes for other sections */}

      <footer className="bg-blue-500 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-white">
          <p>Uber Aerials</p>
          <ul className="flex space-x-4">
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Contact Us</li>
          </ul>
          <div className="flex space-x-2">
            <i className="fab fa-twitter"></i>
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-linkedin-in"></i>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;