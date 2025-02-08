import React from 'react';
import Header from '../components/Header';  // Pastikan path ini benar sesuai struktur folder Anda
import Footer from '../components/Footer';  // Pastikan path ini benar sesuai struktur folder Anda
import { Link } from 'react-router-dom';    // Pastikan react-router-dom terpasang

const Blog = () => {
  const posts = [
    {
      title: "Exploring New Horizons: The Future of Drone Technology",
      author: "Alex Johnson",
      description: "Learn about the latest advancements in drone technology and how they are shaping the future of various industries.",
      imageUrl: "/images/drone-future.jpg",
      link: "/posts/future-of-drone-technology"   // Contoh link menuju halaman rinci
    },
    {
      title: "Capturing Memories: Drone Photography for Events",
      author: "Emily Carter",
      description: "Discover how drones are revolutionizing event photography by providing unique perspectives and breathtaking images.",
      imageUrl: "/images/drone-event.jpg",
      link: "/posts/drone-photography-events"
    },
    {
      title: "Inspection Made Easy: Drones in Infrastructure Monitoring",
      author: "Michael Lee",
      description: "Explore how drones are improving safety and efficiency in infrastructure inspection and maintenance.",
      imageUrl: "/images/drone-inspection.jpg",
      link: "/posts/drones-in-infrastructure-monitoring"
    }
  ];

  const categories = [
    "Aerial Mapping",
    "Event Photography",
    "Inspection Services",
    "Drone Technology"
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow bg-gray-100">
        <div className="container mx-auto max-w-7xl px-4 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {posts.map((post, index) => (
                <Link to={post.link} key={index} className="block">
                  <div className="flex bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <img src={post.imageUrl} alt={post.title} className="w-32 h-32 md:w-48 md:h-48 object-cover" />
                    <div className="p-4">
                      <h2 className="text-xl font-bold text-black">{post.title}</h2>
                      <p className="text-sm text-gray-600">By {post.author}</p>
                      <p className="mt-2 text-black">{post.description}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Sidebar */}
            <aside className="space-y-8">
              {/* Search Box */}
              <div className="bg-white shadow-lg rounded-lg p-4">
                <h3 className="font-bold text-lg text-black mb-2">Search</h3>
                <input
                  type="text"
                  placeholder="Search posts..."
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>

              {/* Categories */}
              <div className="bg-white shadow-lg rounded-lg p-4">
                <h3 className="font-bold text-lg text-black mb-2">Categories</h3>
                <ul>
                  {categories.map((category, index) => (
                    <li key={index} className="text-black mb-1">
                      <a href="#" className="hover:text-blue-500">{category}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;