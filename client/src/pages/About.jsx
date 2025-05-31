import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaHotel,
  FaMapMarkerAlt,
  FaUsers,
  FaAward,
  FaHeart,
} from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/gi";
import { BsShieldCheck } from "react-icons/bs";

const About = () => {
  // Dummy data - can be replaced with real data later
  const stats = [
    {
      number: "10,000+",
      label: "Happy Customers",
      icon: <FaUsers className="text-3xl" />,
    },
    {
      number: "500+",
      label: "Premium Hotels",
      icon: <FaHotel className="text-3xl" />,
    },
    {
      number: "50+",
      label: "Destinations",
      icon: <FaMapMarkerAlt className="text-3xl" />,
    },
    {
      number: "24/7",
      label: "Customer Support",
      icon: <BsShieldCheck className="text-3xl" />,
    },
  ];

  const teamMembers = [
    {
      name: "John Doe",
      role: "CEO & Founder",
      bio: "With over 15 years in the hospitality industry, John founded our platform to revolutionize hotel bookings.",
      image:
        "https://www.shutterstock.com/image-photo/head-shot-handsome-millennial-30s-600nw-1854710668.jpg",
    },
    {
      name: "Jane Smith",
      role: "CTO",
      bio: "Tech enthusiast who ensures our platform runs smoothly with the latest technologies.",
      image:
        "https://chennaifilings.com/blog/wp-content/uploads/2023/11/professional-manager-smiles-writes-message-client-by-email-770x470.jpg",
    },
    {
      name: "Robert Johnson",
      role: "Head of Operations",
      bio: "Makes sure every booking experience is seamless for our customers.",
      image:
        "https://chennaifilings.com/blog/wp-content/uploads/2023/11/businessman-sitting-chair-his-office-min-scaled.jpg",
    },
  ];

  const features = [
    {
      title: "Best Price Guarantee",
      description:
        "We guarantee the best prices for your stays. Found a better deal? We'll match it!",
      icon: <GiReceiveMoney className="text-2xl" />,
    },
    {
      title: "Easy Booking",
      description: "Our simple and intuitive interface makes booking a breeze.",
      icon: <FaHotel className="text-2xl" />,
    },
    {
      title: "Customer Love",
      description: "We prioritize customer satisfaction above all else.",
      icon: <FaHeart className="text-2xl" />,
    },
    {
      title: "Award Winning",
      description:
        "Recognized as the best hotel booking platform for 3 consecutive years.",
      icon: <FaAward className="text-2xl" />,
    },
  ];

  const navigate = useNavigate();
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-30">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          About Our Hotel Booking Platform
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We're revolutionizing the way people book hotels, offering seamless
          experiences with the best prices and exclusive deals.
        </p>
      </section>

      {/* Stats Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md text-center"
          >
            <div className="text-blue-500 mb-4 flex justify-center">
              {stat.icon}
            </div>
            <h3 className="text-3xl font-bold text-gray-800 mb-2">
              {stat.number}
            </h3>
            <p className="text-gray-600">{stat.label}</p>
          </div>
        ))}
      </section>

      {/* Our Story Section */}
      <section className="mb-16">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="Our Story"
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2018, our platform began with a simple mission: to make
              hotel booking effortless and affordable for everyone. What started
              as a small team with a big dream has now grown into a leading
              hotel booking platform serving customers worldwide.
            </p>
            <p className="text-gray-600 mb-4">
              We partner with hotels of all sizes, from boutique accommodations
              to luxury resorts, to bring you the best selection at competitive
              prices. Our technology ensures you get real-time availability and
              instant confirmations.
            </p>
            <p className="text-gray-600">
              Today, we're proud to be trusted by thousands of travelers and
              hotel partners across the globe, but we're still just as
              passionate about delivering exceptional service as we were on day
              one.
            </p>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800">
                  {member.name}
                </h3>
                <p className="text-blue-500 mb-3">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Why Choose Our Platform
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-500 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              quote:
                "This platform saved me so much time and money on my last trip. The hotel selection was amazing!",
              author: "Sarah Johnson",
              role: "Frequent Traveler",
            },
            {
              quote:
                "I've tried many booking sites, but none compare to the ease of use and customer service here.",
              author: "Michael Chen",
              role: "Business Traveler",
            },
            {
              quote:
                "The best price guarantee is real! They matched a lower price I found elsewhere with no hassle.",
              author: "Emma Williams",
              role: "Family Vacationer",
            },
          ].map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-gray-600 italic mb-4">
                "{testimonial.quote}"
              </div>
              <div className="font-bold text-gray-800">
                {testimonial.author}
              </div>
              <div className="text-gray-500 text-sm">{testimonial.role}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-500 text-white rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">
          Ready to Book Your Next Stay?
        </h2>
        <p className="mb-6 max-w-2xl mx-auto">
          Join thousands of satisfied customers who've discovered the easiest
          way to book hotels at the best prices.
        </p>
        <button
          onClick={() => navigate("/rooms")}
          className="bg-white text-blue-500  cursor-pointer font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition duration-300"
        >
          Explore Hotels
        </button>
      </section>
    </div>
  );
};

export default About;
