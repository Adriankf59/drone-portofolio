import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const services = [
  {
    title: "Mapping Services",
    description:
      "Utilize our drones for precise and efficient mapping solutions that provide accurate topographical insights.",
    price: "$500 per session",
    image: "/images/DJI_0595.JPG",
  },
  {
    title: "Inspection Services",
    description:
      "Our drones conduct thorough inspections, ensuring the safety and integrity of structures with high-definition imagery.",
    price: "$750 per session",
    image: "/images/DJI_0643.JPG",
  },
  {
    title: "Event Photography",
    description:
      "Capture your events from a unique perspective with our aerial photography services, perfect for weddings, festivals, and more.",
    price: "$1000 per event",
    image: "/images/event.jpg",
  },
];

const Services = () => {
  return (
    <div className="bg-white font-sans min-h-screen">
      <Header />
      <section
        className="bg-cover bg-center text-white py-20"
        style={{ backgroundImage: "url('/images/hero-background.jpg')" }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">
            Our Aerial Drone Services
          </h1>
          <p className="text-xl">
            Explore the sky with precision and creativity
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto my-10 px-4">
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-blue-100 rounded-lg p-6 shadow-lg text-center"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-40 object-cover mb-4 rounded"
              />
              <h2 className="text-xl font-bold mb-2">{service.title}</h2>
              <p className="text-gray-700 mb-4">{service.description}</p>
              <p className="text-blue-600 font-semibold">{service.price}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-200 py-10">
        <div className="max-w-4xl mx-auto text-center mb-6">
          <h2 className="text-2xl font-bold">Get in Touch</h2>
          <p>
            Contact us today for a consultation and discover how our drone
            services can elevate your projects.
          </p>
        </div>
        <form className="max-w-2xl mx-auto px-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full mb-4 p-3 border border-gray-300 rounded"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full mb-4 p-3 border border-gray-300 rounded"
          />
          <textarea
            placeholder="Your Message"
            className="w-full mb-4 p-3 border border-gray-300 rounded"
            rows="4"
          />
          <button type="submit" className="w-full bg-blue-500 text-white py-3 rounded hover:bg-blue-600">
            Submit
          </button>
        </form>
      </section>

      <section className="bg-blue-500 text-white py-8">
        <div className="max-w-7xl mx-auto flex justify-between px-4">
          <div>
            <h3 className="font-bold">Quick Links</h3>
            <ul>
              <li>Home</li>
              <li>Services</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold">Contact Us</h3>
            <p>Email: info@skyvision.com</p>
            <p>Phone: +1 234 567 890</p>
            <div className="flex space-x-4 mt-2">
              <a href="#"><img src="/icons/facebook.svg" alt="Facebook" /></a>
              <a href="#"><img src="/icons/twitter.svg" alt="Twitter" /></a>
              <a href="#"><img src="/icons/instagram.svg" alt="Instagram" /></a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Services;