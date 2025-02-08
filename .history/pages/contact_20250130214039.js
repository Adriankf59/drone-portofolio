import React from "react";
import Header from "../components/Header";  // Pastikan path ini benar sesuai struktur folder Anda
import Footer from "../components/Footer";  // Pastikan path ini benar sesuai struktur folder Anda
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

// Style untuk kontainer Google Map
const containerStyle = {
  width: '100%',
  height: '400px'
};

// Titik pusat untuk lokasi peta
const center = {
  lat: -6.976228,  // Koordinat latitude lokasi Anda
  lng: 107.632355  // Koordinat longitude lokasi Anda
};

const Contact = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />  // Komponen Header digunakan di sini

      <div className="flex-grow bg-gray-100 py-12 px-4">
        <div className="container mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Form Kontak */}
          <div className="bg-white shadow-md rounded p-8">
            <h2 className="text-2xl text-black font-bold mb-6">Contact Us</h2>
            <form>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full text-black p-3 border border-gray-300 rounded focus:outline-none"
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full text-black p-3 border border-gray-300 rounded focus:outline-none"
                />
              </div>
              <div className="mb-4">
                <textarea
                  placeholder="Your Message"
                  className="w-full text-black p-3 border border-gray-300 rounded focus:outline-none"
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

          {/* Detail Kontak */}
          <div className="bg-white text-black shadow-md rounded p-8">
            <h2 className="text-2xl font-bold mb-6">Contact Details</h2>
            <ul className="mb-6 space-y-4">
              <li className="flex items-center space-x-2">
                <FaMapMarkerAlt className="text-blue-500" />
                <span>123 Sky Avenue, Cloud City, SK 12345</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaPhoneAlt className="text-blue-500" />
                <span>+1 (234) 567-8901</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaEnvelope className="text-blue-500" />
                <a href="mailto:contact@skyvision.com" className="text-blue-500">contact@skyvision.com</a>
              </li>
            </ul>

            {/* Integrasi Google Maps */}
            <LoadScript
              googleMapsApiKey="YOUR_API_KEY"  // Ganti YOUR_API_KEY dengan kunci API Google Maps Anda
            >
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={16}
              >
                {/* Penanda Lokasi */}
                <Marker position={center} />
              </GoogleMap>
            </LoadScript>
          </div>
        </div>
      </div>

      <Footer />  // Komponen Footer digunakan di sini
    </div>
  );
};

export default Contact;