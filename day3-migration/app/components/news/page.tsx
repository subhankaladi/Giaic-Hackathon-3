import Image from 'next/image';
import React from 'react';

const News = () => {
  const articles = [
    {
      img: '/Image (91).png', // Replace with actual image path
      title: 'KOREA - DISTRIBUTION CENTER (CUSTOMER SERVICE CENTER) OPERATIONS ASSOCIATE (ICHEON)',
      category: 'SUPPLY CHAIN, DISTRIBUTION & LOGISTICS',
      location: 'Icheon, South Korea',
    },
    {
      img: '/Image (92).png', // Replace with actual image path
      title: 'KOREA - DISTRIBUTION CENTER (CUSTOMER SERVICE CENTER) OPERATIONS ASSOCIATE (ICHEON)',
      category: 'SUPPLY CHAIN, DISTRIBUTION & LOGISTICS',
      location: 'Icheon, South Korea',
    },
    {
      img: '/Image (93).png', // Replace with actual image path
      title: 'INFRASTRUCTURE AND END USER SUPPORT SPECIALIST',
      category: 'TECHNOLOGY',
      location: 'Melbourne, Victoria',
    },
    {
      img: '/Image (94).png', // Replace with actual image path
      title: 'NIKE MEMPHIS EMPLOYEE STORE RETAIL SALES ASSOCIATE FULL-TIME ("ATHLETE")',
      category: 'RETAIL STORES',
      location: 'Memphis, Tennessee',
    },
    {
      img: '/Image (95).png', // Replace with actual image path
      title: 'FINANCE MANAGER - MEMBERSHIP AND PLATFORMS',
      category: 'FINANCE & ACCOUNTING',
      location: 'Remote',
    },
  ];

  const benefits = [
    {
      title: 'GET MOVING',
      description: 'Access to Nike facilities and resources to stay active and energized.',
      img: '/Image (96).png', // Replace with actual image path
    },
    {
      title: 'FITNESS FIT FOR ALL',
      description: 'Tailored fitness programs to match your style and goals.',
      img: '/Image (97).png', // Replace with actual image path
    },
    {
      title: 'FINANCIAL HEALTH',
      description: 'Learn about financial tools and resources available.',
      img: '/Image (98).png', // Replace with actual image path
    },
    {
      title: 'REST & RECOVERY',
      description: 'Well-being tips to keep you refreshed and balanced.',
      img: '/Image (99).png', // Replace with actual image path
    },
    {
      title: 'NIKE GROUP INSURANCE PLAN',
      description: 'Comprehensive health plans for you and your family.',
      img: '/Image (100).png', // Replace with actual image path
    },
    {
      title: 'EMPLOYEE DISCOUNT',
      description: 'Special discounts on Nike products.',
      img: '/Image (101).png', // Replace with actual image path
    },
    {
      title: 'CONTINUOUS LEARNING',
      description: 'Opportunities to grow and enhance your skills.',
      img: '/Image (102).png', // Replace with actual image path
    },
    {
      title: 'HEALTH & WELLNESS',
      description: 'Promoting a healthy lifestyle for all employees.',
      img: '/Image (103).png', // Replace with actual image path
    },
  ];

  return (
    <div className="bg-gray-100">
      {/* Header Section */}
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold">THERE ARE SO MANY WAYS</h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Blog Section */}
      <section className="container mx-auto px-4 py-8 grid md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-2xl font-semibold">Latest Articles</h2>
          <div className="mt-4 space-y-4">
            {articles.map((article, index) => (
              <div key={index} className="flex items-start space-x-4">
                <Image width={200} height={200}
                  src={article.img}
                  alt={article.title}
                  className="w-24 h-24 object-cover rounded"
                />
                <div>
                  <h3 className="text-lg font-medium">{article.title}</h3>
                  <p className="text-gray-500 text-sm">{article.category}</p>
                  <p className="text-gray-400 text-xs">{article.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Subscribe Form */}
        <div>
          <form className="bg-white shadow-md rounded p-6">
            <h2 className="text-xl font-bold mb-4">Subscribe</h2>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border-gray-300 rounded p-2 mb-4"
            />
            <button className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container mx-auto px-4 py-8 space-y-8">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center bg-gray-50 p-8 rounded shadow"
          >
            <Image width={200} height={200}
              src={benefit.img}
              alt={benefit.title}
              className="w-full md:w-1/3 h-48 object-cover rounded mb-4 md:mb-0 md:mr-6"
            />
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold">{benefit.title}</h2>
              <p className="text-gray-600 mt-2">{benefit.description}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Nike Benefits</p>
        </div>
      </footer>
    </div>
  );
};

export default News;
