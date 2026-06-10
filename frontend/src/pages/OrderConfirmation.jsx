import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';

const OrderConfirmation = () => {
  const { orderId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const order = location.state?.order;

  return (
    <div className="min-h-screen bg-white">
      <div className="container py-12">
        <div className="max-w-2xl mx-auto">
          {/* Success Message */}
          <div className="card p-12 text-center mb-8">
            <div className="flex justify-center mb-6">
              <CheckCircle size={80} className="text-accent-600" />
            </div>

            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Order Confirmed!
            </h1>

            <p className="text-lg text-gray-600 mb-8">
              Thank you for your purchase. Your order has been successfully placed.
            </p>

            {/* Order Details */}
            <div className="bg-gray-50 rounded-lg p-6 mb-8 text-left">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Order Details</h2>

              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Order ID:</span>
                  <span className="font-semibold text-gray-900 break-all">
                    {orderId}
                  </span>
                </div>

                {order && (
                  <>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Order Date:</span>
                      <span className="font-semibold text-gray-900">
                        {new Date(order.createdAt).toLocaleDateString()}
                      </span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-gray-600">Status:</span>
                      <span className="font-semibold text-accent-600 uppercase">
                        {order.status}
                      </span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-gray-600">Total Amount:</span>
                      <span className="font-semibold text-gray-900 text-lg">
                        ${order.totalAmount.toFixed(2)}
                      </span>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Order Items */}
            {order && order.items && (
              <div className="bg-gray-50 rounded-lg p-6 mb-8 text-left">
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Order Items
                </h2>

                <div className="space-y-3">
                  {order.items.map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center py-2 border-b border-gray-200"
                    >
                      <div>
                        <p className="font-semibold text-gray-900">
                          {item.product?.name || 'Product'}
                        </p>
                        <p className="text-sm text-gray-600">
                          Qty: {item.quantity}
                        </p>
                      </div>
                      <p className="font-semibold text-gray-900">
                        ${(item.unitPrice * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Customer Info */}
            {order?.customer && (
              <div className="bg-gray-50 rounded-lg p-6 mb-8 text-left">
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Delivery Information
                </h2>

                <div className="space-y-2 text-gray-700">
                  <p>
                    <span className="font-semibold">Name:</span>{' '}
                    {order.customer.fullName}
                  </p>
                  <p>
                    <span className="font-semibold">Email:</span>{' '}
                    {order.customer.email}
                  </p>
                  <p>
                    <span className="font-semibold">Phone:</span>{' '}
                    {order.customer.phone}
                  </p>
                  <p>
                    <span className="font-semibold">Address:</span>{' '}
                    {order.customer.address}
                  </p>
                </div>
              </div>
            )}

            {/* Next Steps */}
            <div className="bg-blue-50 rounded-lg p-6 mb-8 text-left border-l-4 border-blue-500">
              <h3 className="font-semibold text-gray-900 mb-2">What's Next?</h3>
              <ul className="text-gray-600 space-y-1">
                <li>✓ We'll send you a confirmation email shortly</li>
                <li>✓ Your order will be processed and shipped within 2-3 business days</li>
                <li>✓ You'll receive a tracking number via email</li>
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/')}
                className="btn-primary flex items-center justify-center gap-2"
              >
                Back to Home
                <ArrowRight size={20} />
              </button>
              <button
                onClick={() => navigate('/products')}
                className="btn-secondary"
              >
                Continue Shopping
              </button>
            </div>
          </div>

          {/* Additional Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card p-6 text-center">
              <div className="text-3xl mb-2">📦</div>
              <h3 className="font-bold text-gray-900 mb-1">Fast Shipping</h3>
              <p className="text-sm text-gray-600">2-3 business days</p>
            </div>
            <div className="card p-6 text-center">
              <div className="text-3xl mb-2">✉️</div>
              <h3 className="font-bold text-gray-900 mb-1">Order Updates</h3>
              <p className="text-sm text-gray-600">Check your email</p>
            </div>
            <div className="card p-6 text-center">
              <div className="text-3xl mb-2">👥</div>
              <h3 className="font-bold text-gray-900 mb-1">24/7 Support</h3>
              <p className="text-sm text-gray-600">We're here to help</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
