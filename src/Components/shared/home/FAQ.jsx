import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqItems = [
    {
      question: 'Do you give free consultations?',
      answer: 'Yes, we provide a 30-minute free consultation session with our web consultants. Just fill out the contact form on our website, and our sales team will reach out to you. Feel free to give a detailed explanation of your business needs in the contact form so we can help you better. During the consultation session, we will get to know your requirements, business vision, timeline, and budget. Based on your requirements, we propose different technologies that we can use to convert your idea into a successful solution.',
    },
    {
      question: 'What is the cost of web app development?',
      answer: 'There is no fixed charge for a web development project. Each project is different and requires a different level of expertise, technologies, and hours. Contact us with your web development project details. We will analyze your requirements and give you a detailed work breakdown structure and a cost estimate. For your information, we will calculate the total cost of your project based on - The type of software solution, Complexity of the web solution, Timeline, Technologies you require, Unique features or functionalities you require.',
    },
    {
      question: 'Do you sign an NDA before starting a project?',
      answer: "Yes, we sign non-disclosure agreements (NDA) when we start a new project. We put great value on our client's privacy and security and ensure that everything related to your project will remain strictly confidential.",
    },
    {
      question: 'Can you redesign my existing web application?',
      answer: 'Yes, we offer professional redesigning services. We help you redesign and optimize the code of your legacy systems. Update your existing web solutions with the latest technologies to increase performance, scalability, and usability. We also provide migration services, where we migrate your code to another language or technology that is more suited for your web application. Contact us to discuss your project in detail.',
    },
    {
      question: 'How much time will you take to build a web app from scratch?',
      answer: 'Web app development time is not fixed. The time it takes to design, develop, and deploy a custom web app idea will depend on the type and size of the solution you need. The project timeline can range anywhere from 3-4 weeks to 5+ months. The development time frame depends on- Number of features you want to incorporate, The uniqueness of user interface designs, Scale and complexity of the website, The testing and security of the website. Contact our team today. Our sales team will analyze your requirements and provide an estimated cost and timeline of the project.',
    },
    {
      question: 'Do you test your web solution before deploying?',
      answer: 'Yes, we ensure that the web solution runs perfectly before deploying. Shaats has an in-house team of quality assurance (QA) engineers and testers that perform tests on each aspect of your website or web app. We use various web testing methodologies like black-box testing, unit testing, and stress testing. That means you get a solution that is completely bug-free.',
    },
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq py-10 bg-gray-50">
      <div className="container w-4/5 mx-auto px-4">
        <div className="section-title text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-800">Frequently Asked Questions</h2>
          <p className="text-gray-600 mt-2">Find answers to common questions about our services</p>
        </div>
        <div className="space-y-6 max-w-4xl mx-auto">
          {faqItems.map((faq, index) => (
            <div
              key={index}
              className="border rounded-lg overflow-hidden shadow-md transition-all duration-300 bg-white"
            >
              <button
                className="w-full text-left px-6 py-4 bg-gray-100 hover:bg-indigo-100 focus:outline-none focus:ring focus:ring-indigo-300 flex justify-between items-center"
                onClick={() => handleToggle(index)}
              >
                <span className="text-lg font-medium text-gray-800">{faq.question}</span>
                <svg
                  className={`w-6 h-6 transform transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 py-5 bg-gray-50">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
