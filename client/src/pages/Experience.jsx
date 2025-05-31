import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaStar,
  FaUmbrellaBeach,
  FaCity,
  FaMountain,
  FaSnowflake,
  FaPlay,
} from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { assets } from "../assets/assets.js";
const Experience = () => {
  const videos = [
    {
      id: 1,
      title: "Luxury Beach Resorts",
      description:
        "Experience paradise at our hand-picked beachfront properties",
      src: assets.video1, //"https://example.com/videos/beach.mp4", // Replace with your video URL
      poster:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1473&q=80", // Thumbnail image
    },
    {
      id: 2,
      title: "Urban City Stays",
      description: "Discover premium accommodations in vibrant city centers",
      src: assets.video, //"https://example.com/videos/city.mp4", // Replace with your video URL
      poster:
        "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    },
    {
      id: 3,
      title: "Mountain Retreats",
      description: "Find peace in our secluded mountain lodges",
      src: assets.video2, //"https://example.com/videos/mountain.mp4", // Replace with your video URL
      poster:
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    },
  ];
  // Dummy data for experiences - can be edited later
  const experiences = [
    {
      id: 1,
      title: "Beach Getaways",
      description:
        "Discover the world's most beautiful beaches with our curated selection of coastal resorts.",
      icon: <FaUmbrellaBeach className="text-3xl text-blue-500" />,
      destinations: ["Maldives", "Bali", "Mauritius", "Hawaii"],
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80",
    },
    {
      id: 2,
      title: "Urban Explorations",
      description:
        "Experience vibrant city life with our premium urban hotel selections.",
      icon: <FaCity className="text-3xl text-blue-500" />,
      destinations: ["New York", "Tokyo", "Paris", "Dubai"],
      image:
        "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    {
      id: 3,
      title: "Mountain Retreats",
      description:
        "Find peace in our carefully selected mountain resorts and lodges.",
      icon: <FaMountain className="text-3xl text-blue-500" />,
      destinations: ["Swiss Alps", "Rocky Mountains", "Himalayas", "Andes"],
      image:
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    {
      id: 4,
      title: "Winter Escapes",
      description:
        "Cozy up in our selection of winter wonderland accommodations.",
      icon: <FaSnowflake className="text-3xl text-blue-500" />,
      destinations: ["Aspen", "Whistler", "Swiss Alps", "Hokkaido"],
      image:
        "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1476&q=80",
    },
  ];

  // Dummy testimonials
  const testimonials = [
    {
      quote:
        "The city hotel recommended by this platform made my business trip so comfortable. Perfect location and amenities!",
      author: "Michael T.",
      rating: 5,
    },
    {
      quote:
        "Our beach vacation was magical thanks to the amazing resort we found here. Will definitely book again!",
      author: "Sarah L.",
      rating: 5,
    },
    {
      quote:
        "The mountain retreat was exactly what we needed - peaceful, beautiful, and with excellent service.",
      author: "David K.",
      rating: 4,
    },
  ];
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-30">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Discover Unforgettable Experiences
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We don't just book hotels - we create memorable travel experiences
          tailored to your preferences.
        </p>
      </section>

      {/* Updated Video Gallery Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Featured Experiences
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videos.map((video) => (
            <div
              key={video.id}
              className="relative cursor-pointer group"
              onClick={() => navigate("/rooms")}
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                poster={video.poster}
                className="w-full h-64 object-cover rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300"
              >
                <source src={video.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="mt-4">
                <h3 className="text-xl font-bold text-gray-800">
                  {video.title}
                </h3>
                <p className="text-gray-600">{video.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Categories */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Travel Experiences
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  {exp.icon}
                  <h3 className="text-xl font-bold text-gray-800 ml-3">
                    {exp.title}
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">{exp.description}</p>
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">
                    Popular Destinations:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.destinations.map((dest, idx) => (
                      <span
                        key={idx}
                        className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded"
                      >
                        {dest}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="mb-16 bg-blue-50 rounded-xl p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Traveler Stories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
              <p className="font-medium text-gray-800">
                - {testimonial.author}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="bg-blue-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
              <span className="text-blue-500 text-xl font-bold">1</span>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Choose Your Experience
            </h3>
            <p className="text-gray-600">
              Select from our curated travel experiences or customize your own.
            </p>
          </div>
          <div className="text-center p-6">
            <div className="bg-blue-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
              <span className="text-blue-500 text-xl font-bold">2</span>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Find Your Perfect Stay
            </h3>
            <p className="text-gray-600">
              Browse our hand-picked hotels that match your travel style.
            </p>
          </div>
          <div className="text-center p-6">
            <div className="bg-blue-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
              <span className="text-blue-500 text-xl font-bold">3</span>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Enjoy Your Journey
            </h3>
            <p className="text-gray-600">
              Relax knowing every detail is taken care of for your perfect trip.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Contact Us
        </h2>
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Information */}
          <div className="lg:w-1/2 bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Get In Touch
            </h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <FaMapMarkerAlt className="text-blue-500" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Our Office</h4>
                  <p className="text-gray-600">
                    123 Travel Street, Suite 100
                    <br />
                    San Francisco, CA 94107
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <FaPhone className="text-blue-500" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Phone</h4>
                  <p className="text-gray-600">
                    +1 (800) 123-4567
                    <br />
                    Mon-Fri, 9am-6pm PST
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <FaEnvelope className="text-blue-500" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Email</h4>
                  <p className="text-gray-600">
                    hello@travelstay.com
                    <br />
                    We respond within 24 hours
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <FaClock className="text-blue-500" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">
                    Customer Support Hours
                  </h4>
                  <p className="text-gray-600">
                    24/7 for urgent bookings
                    <br />
                    Standard inquiries: Mon-Sun, 6am-9pm PST
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:w-1/2 bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Send Us a Message
            </h3>
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-medium mb-1"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium mb-1"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-gray-700 font-medium mb-1"
                >
                  Subject
                </label>
                <select
                  id="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select a topic</option>
                  <option value="booking">Booking Inquiry</option>
                  <option value="experience">Experience Suggestion</option>
                  <option value="feedback">Feedback</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-medium mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-blue-500 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-600 transition duration-300 flex items-center"
              >
                <FiSend className="mr-2" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">
          Ready for Your Next Adventure?
        </h2>
        <p className="mb-6 max-w-2xl mx-auto">
          Let us help you create unforgettable travel memories with perfectly
          matched accommodations.
        </p>
        <button
          onClick={() => navigate("/rooms")}
          className="bg-white cursor-pointer text-blue-500 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition duration-300"
        >
          Explore Experiences
        </button>
      </section>
    </div>
  );
};

export default Experience;
