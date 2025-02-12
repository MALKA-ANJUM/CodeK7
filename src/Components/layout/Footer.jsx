import React, { useState } from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
<<<<<<< HEAD
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-12 lg:space-y-0 lg:space-x-20">
          {/* Left Section - Contact Form */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-4xl font-bold text-center lg:text-left mb-6">
              Let’s Talk
            </h2>
            <p className="text-gray-400 text-center lg:text-left mb-8">
              Have questions or want to work with us? Send us a message!
            </p>
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-lg p-6 shadow-lg space-y-6"
            >
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows="4"
                  required
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Send Message
              </button>
            </form>
          </div>
=======
    <section className="bg-gray-100 py-16">
		<div className="container w-4/5 mx-auto ">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
			{/* Left Section - Contact Form */}
				<div>
					<h2 className="text-3xl font-bold text-gray-800">Get in Touch</h2>
					<p className="text-gray-600 mt-2">We’d love to hear from you.</p>
>>>>>>> db5598ee0f82ac46ccf7b8ec4c1f7d70e93d8b5b

          {/* Right Section - Info and Socials */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h3 className="text-3xl font-semibold mb-6">Stay Connected</h3>
            <p className="text-gray-400 mb-8">
              Reach out to us through our contact details or follow us on social
              media to stay updated!
            </p>
            <div className="space-y-4">
              <p>
                <span className="font-bold">Email:</span>{" "}
                <a
                  href="mailto:contact@yourdomain.com"
                  className="text-blue-400 hover:underline"
                >
                  contact@yourdomain.com
                </a>
              </p>
              <p>
                <span className="font-bold">Phone:</span>{" "}
                <a
                  href="tel:+1234567890"
                  className="text-blue-400 hover:underline"
                >
                  +123 456 7890
                </a>
              </p>
              <p>
                <span className="font-bold">Address:</span> 123 Main Street, City, Country
              </p>
            </div>
            <div className="flex justify-center lg:justify-start mt-8 space-x-4">
              <a
                href="#"
                className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href="#"
                className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="#"
                className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full"
              >
                <FaLinkedinIn size={20} />
              </a>
              <a
                href="#"
                className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full"
              >
                <FaInstagram size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12 text-center text-gray-600">
        <p>© {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
