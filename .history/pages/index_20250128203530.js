// pages/index.js
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div>
      <Header />
      {/* Main content goes here */}
      <section className="max-w-7xl mx-auto my-10">
        <h2 className="text-2xl font-bold my-5">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 shadow-lg rounded">
            <img className="w-full h-32 object-cover rounded" src="/path_to_mapping_image" alt="Mapping" />
            <h3 className="text-xl font-semibold mt-4">Mapping</h3>
            <p>Detailed aerial mapping for urban planning and development.</p>
          </div>
          <div className="p-4 shadow-lg rounded">
            <img className="w-full h-32 object-cover rounded" src="/path_to_inspection_image" alt="Inspection" />
            <h3 className="text-xl font-semibold mt-4">Inspection</h3>
            <p>Comprehensive inspection services for infrastructure and assets.</p>
          </div>
          <div className="p-4 shadow-lg rounded">
            <img className="w-full h-32 object-cover rounded" src="/path_to_photography_image" alt="Event Photography" />
            <h3 className="text-xl font-semibold mt-4">Event Photography</h3>
            <p>Capture your events from unique and stunning perspectives.</p>
          </div>
        </div>
      </section>

      {/* Additional sections like Portfolio, Testimonials can go here */}

      <Footer />
    </div>
  );
};

export default HomePage;