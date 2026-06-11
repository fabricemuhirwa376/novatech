const Terms = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-accent-600 text-white py-16">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
          <p className="text-lg text-gray-100">
            Please read these terms carefully before using our service
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="container py-16">
        <div className="max-w-3xl mx-auto space-y-6 text-gray-700">
          <p className="text-sm text-gray-600">
            Last Updated: June 2024
          </p>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">1. Acceptance of Terms</h2>
            <p>
              By accessing and using the NovaTech RW website and services, you accept and agree to be 
              bound by and comply with these Terms and Conditions. If you do not agree to abide by 
              the above, please do not use this service.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">2. User Responsibilities</h2>
            <p>
              You agree to use this website only for lawful purposes and in a way that does not infringe 
              upon the rights of others or restrict their use and enjoyment of the website. Prohibited 
              behavior includes:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Harassing or causing distress or inconvenience to any person</li>
              <li>Transmitting viruses or malware</li>
              <li>Attempting unauthorized access</li>
              <li>Using false or misleading information</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">3. Product Information</h2>
            <p>
              We strive to provide accurate descriptions and pricing for all products. However, we do not 
              warrant that product descriptions, pricing, or other content is accurate, complete, or error-free. 
              We reserve the right to correct any errors or omissions.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">4. Payment Terms</h2>
            <p>
              By submitting an order, you represent that you are authorized to make the purchase and that 
              the payment method provided is valid. You authorize us to charge your payment method for the 
              full order amount including shipping and applicable taxes.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">5. Refund and Return Policy</h2>
            <p>
              We offer a 30-day money-back guarantee on all products. Items must be returned in original 
              condition with original packaging. Refunds will be processed within 5-7 business days of 
              inspection. Some items may be non-returnable due to hygiene or safety reasons.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">6. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, NovaTech RW shall not be liable for any indirect, 
              incidental, special, consequential, or punitive damages resulting from your use or inability 
              to use the service, even if we have been advised of the possibility of such damages.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">7. Intellectual Property Rights</h2>
            <p>
              All content on our website, including text, graphics, logos, images, and software, is the 
              property of NovaTech RW or its content suppliers and is protected by international copyright laws.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">8. Termination</h2>
            <p>
              We reserve the right to terminate or suspend your account and access to the service at any 
              time for any reason, without notice or liability.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">9. Amendments</h2>
            <p>
              We may modify these Terms and Conditions at any time. Your continued use of the website 
              following the posting of revised Terms means that you accept and agree to the changes.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">10. Governing Law</h2>
            <p>
              These Terms and Conditions are governed by and construed in accordance with the laws of Rwanda, 
              and you irrevocably submit to the exclusive jurisdiction of the courts located in Kigali, Rwanda.
            </p>
          </div>

          <div className="bg-accent-50 p-6 rounded-lg">
            <h3 className="font-bold text-gray-900 mb-2">Contact Us</h3>
            <p>
              If you have questions about these Terms, please contact us at: 
              <span className="text-accent-600 font-semibold"> support@novatechrw.com</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;
