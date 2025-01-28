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
    <div>
      <Header />
      {/* Main content goes here */}
      <section className="max-w-7xl mx-auto my-10">
        <h2 className="text-2xl font-bold my-5">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { title: 'Mapping', description: 'Detailed aerial mapping for urban planning and development.', image: '/images/DJI_0595.JPG' },
            { title: 'Inspection', description: 'Comprehensive inspection services for infrastructure and assets.', image: '/path_to_inspection_image' },
            { title: 'Event Photography', description: 'Capture your events from unique and stunning perspectives.', image: '/path_to_photography_image' },
          ].map((service) => (
            <div
              key={service.title}
              onClick={() => handleSelectService(service.title)}
              className={`p-4 shadow-lg rounded bg-white cursor-pointer border-2 ${selectedService === service.title ? 'border-blue-500' : 'border-transparent'}`}
            >
              <img className="w-full h-32 object-cover rounded" src={service.image} alt={service.title} />
              <h3 className="text-xl text font-semibold mt-4">{service.title}</h3>
              <p>{service.description}</p>
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