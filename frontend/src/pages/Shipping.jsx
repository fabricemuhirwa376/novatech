import { Truck, MapPin, Clock, DollarSign, Package } from 'lucide-react';

const Shipping = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-accent-600 text-white py-16">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Shipping Information</h1>
          <p className="text-lg text-gray-100">
            Fast, reliable delivery across Rwanda
          </p>
        </div>
      </section>

      {/* Kigali Delivery */}
      <section className="container py-16">
        <h2 className="text-3xl font-bold mb-12 text-gray-900">Kigali Delivery</h2>
        <div className="bg-green-50 border-2 border-green-200 p-8 rounded-lg mb-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-accent-600 rounded-full flex items-center justify-center flex-shrink-0">
              <Truck className="text-white" size={24} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">🎉 Free Delivery</h3>
              <p className="text-gray-700">
                Orders above 50,000 RWF qualify for FREE delivery in Kigali
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {/* Standard Delivery */}
          <div className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-lg transition">
            <div className="flex items-center mb-4">
              <Clock className="text-accent-600 mr-2" size={24} />
              <h3 className="font-bold text-gray-900">Standard</h3>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-gray-700">
                <span className="font-semibold">2-3 days</span> delivery
              </p>
              <p className="text-lg font-bold text-accent-600">3,000 RWF</p>
              <p className="text-xs text-gray-600">For orders under 50,000 RWF</p>
            </div>
          </div>

          {/* Express Delivery */}
          <div className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-lg transition">
            <div className="flex items-center mb-4">
              <Truck className="text-accent-600 mr-2" size={24} />
              <h3 className="font-bold text-gray-900">Express</h3>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-gray-700">
                <span className="font-semibold">Same day</span> delivery
              </p>
              <p className="text-lg font-bold text-accent-600">5,000 RWF</p>
              <p className="text-xs text-gray-600">Orders before 12 PM</p>
            </div>
          </div>

          {/* Regional - UPS */}
          <div className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-lg transition">
            <div className="flex items-center mb-4">
              <MapPin className="text-accent-600 mr-2" size={24} />
              <h3 className="font-bold text-gray-900">Regional</h3>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-gray-700">
                <span className="font-semibold">4-7 days</span> delivery
              </p>
              <p className="text-lg font-bold text-accent-600">5,000 RWF</p>
              <p className="text-xs text-gray-600">Outside Kigali</p>
            </div>
          </div>

          {/* Remote Areas */}
          <div className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-lg transition">
            <div className="flex items-center mb-4">
              <Package className="text-accent-600 mr-2" size={24} />
              <h3 className="font-bold text-gray-900">Remote</h3>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-gray-700">
                <span className="font-semibold">7-10 days</span> delivery
              </p>
              <p className="text-lg font-bold text-accent-600">Variable</p>
              <p className="text-xs text-gray-600">Contact support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Shipping Regions */}
      <section className="bg-gray-50 py-16">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-gray-900">Shipping to All Provinces</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Kigali City</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent-600 rounded-full mr-3"></span>
                  Free delivery on orders above 50,000 RWF
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent-600 rounded-full mr-3"></span>
                  2-3 days standard shipping
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent-600 rounded-full mr-3"></span>
                  Same-day express available
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Other Provinces</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent-600 rounded-full mr-3"></span>
                  Fixed shipping rate: 5,000 RWF
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent-600 rounded-full mr-3"></span>
                  4-7 days delivery
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent-600 rounded-full mr-3"></span>
                  Tracking information included
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Order Tracking */}
      <section className="container py-16">
        <h2 className="text-3xl font-bold mb-12 text-gray-900">Track Your Order</h2>
        <div className="bg-accent-50 p-8 rounded-lg">
          <p className="text-gray-700 mb-6">
            You'll receive an order confirmation email immediately after purchase, followed by shipping 
            confirmation with a tracking number. You can track your order in real-time:
          </p>
          <ol className="space-y-4">
            <li className="flex items-start">
              <span className="flex-shrink-0 w-8 h-8 bg-accent-600 text-white rounded-full flex items-center justify-center font-bold mr-4">1</span>
              <span className="text-gray-700"><strong>Check your email</strong> for tracking information</span>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 w-8 h-8 bg-accent-600 text-white rounded-full flex items-center justify-center font-bold mr-4">2</span>
              <span className="text-gray-700"><strong>Log into your account</strong> to view order status</span>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 w-8 h-8 bg-accent-600 text-white rounded-full flex items-center justify-center font-bold mr-4">3</span>
              <span className="text-gray-700"><strong>Use the tracking number</strong> to monitor delivery</span>
            </li>
          </ol>
        </div>
      </section>

      {/* Shipping Policy */}
      <section className="bg-gray-50 py-16">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-gray-900">Important Shipping Information</h2>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border-l-4 border-accent-600">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Delivery Address</h3>
              <p className="text-gray-700">
                Please ensure your delivery address is complete and accurate. We cannot be responsible 
                for delays or failed deliveries due to incomplete address information.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border-l-4 border-accent-600">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Signature Required</h3>
              <p className="text-gray-700">
                Some high-value items require a signature on delivery. Make sure someone is available 
                to receive the package.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border-l-4 border-accent-600">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Delayed Shipments</h3>
              <p className="text-gray-700">
                In case of unforeseen circumstances, we'll notify you immediately. You can contact 
                support for assistance.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border-l-4 border-accent-600">
              <h3 className="text-lg font-bold text-gray-900 mb-2">International Shipping</h3>
              <p className="text-gray-700">
                Currently, we only ship within Rwanda. International shipping options may be available 
                in the future. Contact support for inquiries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="container py-16 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Need Help?</h2>
        <p className="text-gray-700 mb-6">
          Have questions about shipping? Our support team is ready to help.
        </p>
        <a
          href="/contact"
          className="inline-block bg-accent-600 hover:bg-accent-700 text-white font-bold py-3 px-8 rounded-lg transition duration-200"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
};

export default Shipping;
