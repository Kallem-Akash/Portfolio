import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState(null); // success or error message

  React.useEffect(() => {
    if (status) {
      const timer = setTimeout(() => setStatus(null), 4000);
      return () => clearTimeout(timer);
    }
  }, [status]);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      'service_pvvqqft', 
      'template_2a55tob', 
      form.current,
      'tZM-hdtu5CdBUfwLd' 
    )
    .then(
      (result) => {
        setStatus({ type: 'success', message: 'Your message has been sent successfully!' });
        setFormData({ name: '', email: '', message: '' });
      },
      (error) => {
        setStatus({ type: 'error', message: 'Failed to send message. Please try again later.' });
      }
    );
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <div className="text-center mb-8 sm:mb-12">
        <span className="bg-gray-900 dark:bg-gray-700 text-white px-4 py-2 rounded-full text-xs sm:text-sm font-medium hover:scale-105 transition-transform duration-200 inline-block">
          Contact
        </span>
        <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 dark:text-gray-100 mt-6 sm:mt-8 mb-4 sm:mb-6">
          Get in Touch
        </h2>
        <p className="text-base sm:text-xl text-gray-600 dark:text-gray-400">
          Feel free to reach out through this form or{' '}
          <a
            href="https://wa.me/9347132815" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-violet-500 hover:text-violet-600 dark:text-violet-400 dark:hover:text-violet-300 hover:underline transition-colors duration-200"
          >
            direct message me on WhatsApp
          </a>
          . I'll respond whenever I can.
        </p>
        {status && (
          <div className={`mt-6 px-4 py-3 rounded-lg font-medium text-sm sm:text-base ${status.type === 'success' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'}`}>
            {status.message}
          </div>
        )}
      </div>
      <form ref={form} onSubmit={handleSubmit} className="max-w-2xl mx-auto">
        <div className="mb-4 sm:mb-6">
          <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 transition-all duration-200 hover:border-gray-400 dark:hover:border-gray-500"
            required
          />
        </div>
        <div className="mb-4 sm:mb-6">
          <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your.email@example.com"
            className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 transition-all duration-200 hover:border-gray-400 dark:hover:border-gray-500"
            required
          />
        </div>
        <div className="mb-6 sm:mb-8">
          <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your message..."
            rows={6}
            className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none resize-none bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 transition-all duration-200 hover:border-gray-400 dark:hover:border-gray-500"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-gray-900 dark:bg-gray-700 text-white py-3 sm:py-4 rounded-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-600 transition-all duration-200 hover:scale-105 transform text-sm sm:text-base"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;