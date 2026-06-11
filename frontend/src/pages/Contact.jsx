import { useState } from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form submitted:', formData);
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-accent-600 text-white py-16">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg text-gray-100">
            We'd love to hear from you. Get in touch with us anytime.
          </p>
        </div>
      </section>

      <div className="container py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Get in Touch</h2>
            
            {/* Address */}
            <div className="flex items-start mb-6">
              <div className="w-10 h-10 bg-accent-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <MapPin className="text-accent-600" size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                <p className="text-gray-700 text-sm">KG 11 Ave, Kigali, Rwanda</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start mb-6">
              <div className="w-10 h-10 bg-accent-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <Phone className="text-accent-600" size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                <p className="text-gray-700 text-sm">+250 788 123 456</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start mb-6">
              <div className="w-10 h-10 bg-accent-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <Mail className="text-accent-600" size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                <p className="text-gray-700 text-sm">support@novatechrw.com</p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start">
              <div className="w-10 h-10 bg-accent-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <Clock className="text-accent-600" size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Business Hours</h3>
                <p className="text-gray-700 text-sm">Monday - Friday: 8:00 AM - 6:00 PM</p>
                <p className="text-gray-700 text-sm">Saturday: 10:00 AM - 4:00 PM</p>
                <p className="text-gray-700 text-sm">Sunday: Closed</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Send us a Message</h2>
            
            {submitted ? (
              <div className="bg-green-50 border border-green-200 text-green-800 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">✓</div>
                <h3 className="font-bold text-lg mb-2">Thank you for your message!</h3>
                <p className="text-sm">We'll get back to you as soon as possible.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-600"
                    placeholder="Your name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-600"
                    placeholder="your.email@example.com"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-600"
                    placeholder="What is this about?"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-600 resize-none"
                    placeholder="Your message here..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-accent-600 hover:bg-accent-700 text-white font-bold py-3 rounded-lg transition duration-200"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Google Maps */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Find Us on Map</h2>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.500000000001!2d30.0574!3d-1.9505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca6c49c3c6d5d%3A0x0!2sKigali%2C%20Rwanda!5e0!3m2!1sen!2srw!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="NovaTech RW Location - Kigali, Rwanda"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
