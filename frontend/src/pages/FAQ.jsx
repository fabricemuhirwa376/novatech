import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      category: 'Shipping',
      question: 'What is the shipping time for orders in Kigali?',
      answer: 'We offer free delivery in Kigali for orders above 50,000 RWF. Standard delivery takes 2-3 business days. You can track your order status in real-time through your account dashboard.'
    },
    {
      category: 'Shipping',
      question: 'Do you ship outside of Kigali?',
      answer: 'Yes, we ship to all provinces in Rwanda! Shipping charges vary based on location. Orders outside Kigali typically arrive within 4-7 business days. Check our shipping rates during checkout.'
    },
    {
      category: 'Returns',
      question: 'What is your return policy?',
      answer: 'We offer a 30-day money-back guarantee on all products. Items must be in original condition with original packaging. Simply contact our support team to initiate a return, and we\'ll arrange pickup at no extra cost.'
    },
    {
      category: 'Returns',
      question: 'How long does the refund process take?',
      answer: 'Once we receive and inspect your returned item, refunds are processed within 5-7 business days. The refunded amount will be credited back to your original payment method.'
    },
    {
      category: 'Payments',
      question: 'What payment methods do you accept?',
      answer: 'We accept multiple payment methods including: Mobile Money (MTN, Airtel), Bank Transfers, Debit/Credit Cards, and Cash on Delivery. All payments are secured with advanced encryption technology.'
    },
    {
      category: 'Payments',
      question: 'Is my payment information secure?',
      answer: 'Yes! We use industry-standard SSL encryption to protect all payment information. Your payment details are never stored on our servers, and we comply with international payment security standards (PCI DSS).'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const categories = ['All', 'Shipping', 'Returns', 'Payments'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredFAQs = selectedCategory === 'All' 
    ? faqs 
    : faqs.filter(faq => faq.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-accent-600 text-white py-16">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-lg text-gray-100">
            Find answers to common questions about shipping, returns, and payments
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="container py-16">
        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg font-medium transition duration-200 ${
                selectedCategory === category
                  ? 'bg-accent-600 text-white'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto space-y-4">
          {filteredFAQs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 bg-white hover:bg-gray-50 transition text-left"
              >
                <div>
                  <span className="inline-block bg-accent-100 text-accent-700 text-xs font-semibold px-3 py-1 rounded-full mb-2">
                    {faq.category}
                  </span>
                  <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                </div>
                <ChevronDown
                  size={24}
                  className={`text-accent-600 flex-shrink-0 ml-4 transition transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Still Have Questions */}
        <div className="mt-16 text-center bg-accent-50 py-12 rounded-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Still have questions?</h3>
          <p className="text-gray-700 mb-6">
            Can't find the answer you're looking for? Our customer support team is here to help.
          </p>
          <a
            href="/contact"
            className="inline-block bg-accent-600 hover:bg-accent-700 text-white font-bold py-3 px-8 rounded-lg transition duration-200"
          >
            Contact Support
          </a>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
