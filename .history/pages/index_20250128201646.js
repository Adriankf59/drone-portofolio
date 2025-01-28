import React from 'react';

const App = () => {
  return (
    <div>
      <header className="bg-white shadow-md">
        <nav className="max-w-7xl mx-auto flex justify-between items-center p-5">
          <h1 className="text-xl font-bold">Uber Aerials</h1>
          <ul className="flex space-x-4">
            <li className="hover:text-blue-500 cursor-pointer">Home</li>
            <li className="hover:text-blue-500 cursor-pointer">Services</li>
            <li className="hover:text-blue-500 cursor-pointer">Contact</li>
            <li className="hover:text-blue-500 cursor-pointer">Blog</li>
          </ul>
        </nav>
        <div
          className="bg-cover bg-center h-64 flex items-center justify-center"
          style={{ backgroundImage: "url('path_to_your_hero_image')" }}
        >
          <div className="bg-white bg-opacity-75 p-5 rounded">
            <h2 className="text-2xl font-semibold">Explore the World from Above</h2>
            <button className="mt-4 py-2 px-4 bg-blue-500 text-white rounded">Get Started</button>
          </div>
        </div>
      </header>

      <section className="max-w-7xl mx-auto my-10">
        <h2 className="text-2xl font-bold my-5">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 shadow-lg rounded">
            <img className="w-full h-32 object-cover rounded" src="path_to_mapping_image" alt="Mapping" />
            <h3 className="text-xl font-semibold mt-4">Mapping</h3>
            <p>Detailed aerial mapping for urban planning and development.</p>
          </div>
          <div className="p-4 shadow-lg rounded">
            <img className="w-full h-32 object-cover rounded" src="path_to_inspection_image" alt="Inspection" />
            <h3 className="text-xl font-semibold mt-4">Inspection</h3>
            <p>Comprehensive inspection services for infrastructure and assets.</p>
          </div>
          <div className="p-4 shadow-lg rounded">
            <img className="w-full h-32 object-cover rounded" src="path_to_photography_image" alt="Event Photography" />
            <h3 className="text-xl font-semibold mt-4">Event Photography</h3>
            <p>Capture your events from unique and stunning perspectives.</p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto my-10">
        <h2 className="text-2xl font-bold my-5">Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 shadow-lg rounded">
            <img className="w-full h-32 object-cover rounded" src="path_to_solar_farm_image" alt="Solar Farm Inspection" />
            <h3 className="text-xl font-semibold mt-4">Solar Farm Inspection</h3>
            <p>Efficient and thorough solar panel inspections utilizing drone technology.</p>
          </div>
          <div className="p-4 shadow-lg rounded">
            <img className="w-full h-32 object-cover rounded" src="path_to_urban_planning_image" alt="Urban Planning" />
            <h3 className="text-xl font-semibold mt-4">Urban Planning</h3>
            <p>Aiding city development through advanced aerial mapping techniques.</p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto my-10">
        <h2 className="text-2xl font-bold my-5">Client Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-100 p-4 rounded shadow">
            <p>"SkyVision's drone services were exceptional, providing us with detailed insights and stunning visuals for our project."</p>
            <h4 className="mt-2 font-semibold">- Emily Carter, Project Manager</h4>
          </div>
          <div className="bg-gray-100 p-4 rounded shadow">
            <p>"The event photography captured every moment perfectly from angles we never thought possible!"</p>
            <h4 className="mt-2 font-semibold">- James Thompson, Event Organizer</h4>
          </div>
          <div className="bg-gray-100 p-4 rounded shadow">
            <p>"Highly recommend SkyVision for their professional approach and cutting-edge drone technology."</p>
            <h4 className="mt-2 font-semibold">- Sarah Lin, Construction Supervisor</h4>
          </div>
        </div>
      </section>

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
}

export default App;