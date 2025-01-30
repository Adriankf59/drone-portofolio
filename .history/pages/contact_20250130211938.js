import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <div className="flex-grow bg-gray-100 py-12 px-4">
        <div className="container mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white shadow-md rounded p-8">
            <h2 className="text-2xl text-black font-bold mb-6">Contact Us</h2>
            <form>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full text-b p-3 border border-gray-300 rounded focus:outline-none"
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none"
                />
              </div>
              <div className="mb-4">
                <textarea
                  placeholder="Your Message"
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none"
                  rows="4"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-3 rounded hover:bg-blue-600 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Details */}
          <div className="bg-white text-black shadow-md rounded p-8">
            <h2 className="text-2xl font-bold mb-6">Contact Details</h2>
            <ul className="mb-6 space-y-4">
              <li className="flex items-center space-x-2">
                <img src="/icons/location.svg" alt="Location" />
                <span>123 Sky Avenue, Cloud City, SK 12345</span>
              </li>
              <li className="flex items-center space-x-2">
                <img src="/icons/phone.svg" alt="Phone" />
                <span>+1 (234) 567-8901</span>
              </li>
              <li className="flex items-center space-x-2">
                <img src="/icons/email.svg" alt="Email" />
                <a href="mailto:contact@skyvision.com" className="text-blue-500">contact@skyvision.com</a>
              </li>
            </ul>
            <img
              src="/images/map-placeholder.png"
              alt="Map"
              className="rounded w-full mt-4"
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;