const Privacy = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-accent-600 text-white py-16">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-lg text-gray-100">
            Your privacy and data protection are important to us
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="container py-16">
        <div className="max-w-3xl mx-auto prose prose-lg">
          <div className="space-y-6 text-gray-700">
            <p className="text-sm text-gray-600">
              Last Updated: June 2024
            </p>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">1. Introduction</h2>
              <p>
                NovaTech RW ("we", "us", or "our") operates the NovaTech RW website and mobile application. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
                when you visit our website and use our services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">2. Information We Collect</h2>
              <p>
                We collect information you provide directly to us, such as:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Account information (name, email, password)</li>
                <li>Shipping and billing addresses</li>
                <li>Phone numbers</li>
                <li>Payment information</li>
                <li>Product reviews and feedback</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">3. How We Use Your Information</h2>
              <p>
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Process your orders and payments</li>
                <li>Send order confirmations and updates</li>
                <li>Provide customer support</li>
                <li>Improve our website and services</li>
                <li>Send marketing communications (with your consent)</li>
                <li>Prevent fraud and enhance security</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">4. Data Protection</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal 
                data against unauthorized access, alteration, disclosure, or destruction. All payment 
                information is encrypted using industry-standard SSL technology.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">5. Third-Party Sharing</h2>
              <p>
                We do not sell your personal information. We may share information with:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Payment processors to process transactions</li>
                <li>Shipping carriers to deliver your orders</li>
                <li>Service providers who assist in our operations</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">6. Your Rights</h2>
              <p>
                You have the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access your personal data</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Opt-out of marketing communications</li>
                <li>Data portability</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">7. Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy or our privacy practices, 
                please contact us at: privacy@novatechrw.com
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
