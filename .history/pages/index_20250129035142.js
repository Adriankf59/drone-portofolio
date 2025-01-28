// pages/index.js
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const HomePage = () => {
  const [selectedService, setSelectedService] = useState(null);

  const handleSelectService = (service) => {
    setSelectedService(service);
  };

  return (
    <div className="bg-white min-h-screen">  {/* Applied background color */}
      <Header />
      {/* Main content goes here */}
      <section className="max-w-7xl mx-auto my-10">
        <h2 className="text-2xl text- font-bold my-5">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { title: 'Mapping', description: 'Detailed aerial mapping for urban planning and development.', image: '/images/DJI_0595.JPG' },
            { title: 'Inspection', description: 'Comprehensive inspection services for infrastructure and assets.', image: '/images/DJI_0643.JPG' },
            { title: 'Event Photography', description: 'Capture your events from unique and stunning perspectives.', image: '/images/DJI_0651.JPG' },
          ].map((service) => (
            <div
              key={service.title}
              onClick={() => handleSelectService(service.title)}
              className={`flex flex-col p-4 shadow-lg rounded bg-white cursor-pointer border-2 ${
                selectedService === service.title ? 'border-blue-500' : 'border-transparent'
              }`}
            >
              <div className="overflow-hidden rounded">
                <img
                  className="w-full h-48 object-cover"
                  src={service.image}
                  alt={service.title}
                />
              </div>
              <h3 className="text-xl text-black font-semibold mt-4">{service.title}</h3>
              <p className="mt-2 text-black">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Additional sections like Portfolio, Testimonials can go here */}

      <Footer />
    </div>
  );
};

export default HomePage;