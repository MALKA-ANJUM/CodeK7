import React from 'react'

const Footer = () => {
  return (
    <section className="bg-gray-100 py-16">
    <div className="container mx-auto px-6 lg:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Section - Contact Form */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800">Get in Touch</h2>
          <p className="text-gray-600 mt-2">We’d love to hear from you.</p>

          {/* Zoho CRM Form */}
          <iframe
            className="w-full h-[500px] mt-6 border rounded-md"
            src="https://forms.zohopublic.com/your-form-link" 
            title="Contact Form"
          ></iframe>
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

          {/* Clutch Widget */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-gray-800">Reviews on Clutch</h3>
            <iframe
              className="w-full h-[200px] mt-2 border rounded-md"
              src="https://clutch.co/review-widget/your-company"
              title="Clutch Reviews"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Footer
