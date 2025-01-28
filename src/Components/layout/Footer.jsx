import React, { useState } from 'react';

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
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
    <section className="bg-gray-100 py-16">
		<div className="container mx-auto px-6 lg:px-20">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
			{/* Left Section - Contact Form */}
				<div>
					<h2 className="text-3xl font-bold text-gray-800">Get in Touch</h2>
					<p className="text-gray-600 mt-2">We’d love to hear from you.</p>

					<form onSubmit={handleSubmit} className="mt-6 bg-white p-6 rounded-lg shadow-md">
						{/* Name Field */}
						<div className="mb-4">
							<label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="name">
								Name
							</label>
							<input
								type="text"
								id="name"
								name="name"
								value={formData.name}
								onChange={handleChange}
								required
								className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
								/>
						</div>

						{/* Email Field */}
						<div className="mb-4">
							<label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">
								Email
							</label>
							<input
							type="email"
							id="email"
							name="email"
							value={formData.email}
							onChange={handleChange}
							required
							className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
							/>
						</div>

					{/* Message Field */}
						<div className="mb-4">
							<label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="message">
								Message
							</label>
							<textarea
								id="message"
								name="message"
								value={formData.message}
								onChange={handleChange}
								required
								rows="4"
								className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
								>
							</textarea>
						</div>

						{/* Submit Button */}
						<button type="submit"
							className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
						>
							Send Message
						</button>
					</form>
				</div>

				{/* Right Section - Contact Info */}
				<div>
					<h3 className="text-xl font-semibold text-gray-800">Contact Information</h3>
					<p className="text-gray-600 mt-2">Reach out to us through any of the following ways.</p>

					{/* Address */}
					<div className="mt-6">
						<p className="font-semibold text-gray-800">Address:</p>
						<p className="text-gray-600">Your Company Address, City, Country</p>
					</div>

					{/* Email */}
					<div className="mt-4">
						<p className="font-semibold text-gray-800">Email:</p>
						<a href="mailto:contact@yourdomain.com" className="text-blue-600 hover:underline">
							contact@yourdomain.com
						</a>
					</div>

					{/* Phone */}
					<div className="mt-4">
						<p className="font-semibold text-gray-800">Phone:</p>
						<a href="tel:+1234567890" className="text-blue-600 hover:underline">
							+123 456 7890
						</a>
					</div>

					{/* Social Media */}
					<div className="mt-6">
						<h3 className="text-lg font-semibold text-gray-800">Follow Us</h3>
						<div className="flex space-x-4 mt-2">
							<a href="#" className="text-gray-600 hover:text-gray-900">
								<i className="fab fa-facebook-f text-xl"></i>
							</a>
							<a href="#" className="text-gray-600 hover:text-gray-900">
								<i className="fab fa-twitter text-xl"></i>
							</a>
							<a href="#" className="text-gray-600 hover:text-gray-900">
								<i className="fab fa-linkedin-in text-xl"></i>
							</a>
							<a href="#" className="text-gray-600 hover:text-gray-900">
								<i className="fab fa-instagram text-xl"></i>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
    </section>
  );
};

export default Footer;
