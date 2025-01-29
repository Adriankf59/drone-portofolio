import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/20/solid';
import Header from '../components/Header';
import Footer from '../components/Footer';

const HomePage = () => {
  const services = [
    { title: 'Mapping', description: 'Detailed aerial mapping for urban planning and development.', image: '/images/DJI_0595.JPG' },
    { title: 'Inspection', description: 'Comprehensive inspection services for infrastructure and assets.', image: '/images/DJI_0643.JPG' },
    { title: 'Event Photography', description: 'Capture your events from unique and stunning perspectives.', image: '/images/DJI_0651.JPG' },
  ];

  const portfolios = [
    { title: 'Urban Project', description: 'A comprehensive urban planning project using our mapping services.', image: '/images/urban.jpg' },
    { title: 'Bridge Inspection', description: 'A thorough inspection of a major bridge using advanced techniques.', image: '/images/bridge.jpg' },
    { title: 'Wedding Coverage', description: 'Stunning aerial photography for a beautiful wedding.', image: '/images/portfolio3.jpg' },
  ];

  const [portfolioPage, setPortfolioPage] = useState(0);
  const pageSize = 2;

  const handleNextPage = () => {
    if ((portfolioPage + 1) * pageSize < portfolios.length) {
      setPortfolioPage(portfolioPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (portfolioPage > 0) {
      setPortfolioPage(portfolioPage - 1);
    }
  };

  const currentPortfolios = portfolios.slice(portfolioPage * pageSize, (portfolioPage + 1) * pageSize);

  return (
    <div className="bg-white min-h-screen">
      <Header />
      <section className="max-w-7xl mx-auto my-10">
        <h2 className="text-2xl text-black font-bold my-5">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="flex flex-col p-4 shadow-lg rounded bg-white cursor-pointer border-2 transition-transform transform hover:scale-105 hover:shadow-xl border-transparent"
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

      <section className="max-w-7xl mx-auto my-10">
        <h2 className="text-2xl text-black font-bold my-5">Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {currentPortfolios.map((portfolio) => (
            <motion.div
              key={portfolio.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col p-4 shadow-lg rounded bg-white cursor-pointer border-2 transition-transform transform hover:scale-105 hover:shadow-xl border-transparent"
            >
              <div className="overflow-hidden rounded">
                <img
                  className="w-full h-[200px] object-cover"
                  src={portfolio.image}
                  alt={portfolio.title}
                />
              </div>
              <h3 className="text-xl text-black font-semibold mt-4">{portfolio.title}</h3>
              <p className="mt-2 text-black">{portfolio.description}</p>
            </motion.div>
          ))}
        </div>
        <div className="flex justify-between mt-4">
          <motion.button
            whileHover={{ scale: 1.1, color: "#ffffff", backgroundColor: "#4b5563" }}
            onClick={handlePrevPage}
            className="flex items-center px-4 py-2 bg-gray-300 rounded transition-all duration-200 disabled:opacity-50"
            disabled={portfolioPage === 0}
          >
            <ArrowLeftIcon className="h-6 w-6 mr-2" />
            Previous
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1, color: "#ffffff", backgroundColor: "#4b5563" }}
            onClick={handleNextPage}
            className="flex items-center px-4 py-2 bg-gray-300 rounded transition-all duration-200 disabled:opacity-50"
            disabled={(portfolioPage + 1) * pageSize >= portfolios.length}
          >
            Next
            <ArrowRightIcon className="h-6 w-6 ml-2" />
          </motion.button>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default HomePage;