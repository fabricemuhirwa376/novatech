import { Link } from 'react-router-dom';

const team = [
  { name: 'Jean Claude Uwimana', role: 'CEO & Founder', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&q=80' },
  { name: 'Amina Mutoni', role: 'Head of Operations', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80' },
  { name: 'Eric Habimana', role: 'Lead Developer', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80' },
];

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="bg-green-600 text-white py-20 text-center px-4">
        <h1 className="text-5xl font-extrabold mb-4">About NovaTech RW</h1>
        <p className="text-xl text-green-100 max-w-2xl mx-auto">
          Rwanda's most trusted electronics store, bringing premium technology to every Rwandan home.
        </p>
      </div>

      {/* Story */}
      <div className="max-w-5xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h2>
          <p className="text-gray-600 mb-4">
            Founded in 2020 in Kigali, NovaTech RW started with a simple mission: make premium electronics accessible to every Rwandan. What began as a small shop in Kimironko has grown into Rwanda's leading online electronics platform.
          </p>
          <p className="text-gray-600">
            We partner with the world's top brands to bring you authentic, quality-guaranteed products with fast delivery across Rwanda and excellent after-sales support.
          </p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&q=80"
          alt="NovaTech"
          className="rounded-xl shadow-lg w-full"
        />
      </div>

      {/* Mission & Vision */}
      <div className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-8">
          <div className="bg-green-50 border-2 border-green-200 rounded-xl p-8">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Mission</h3>
            <p className="text-gray-600">
              To provide every Rwandan with access to the latest technology at fair prices, with outstanding customer service and fast reliable delivery.
            </p>
          </div>
          <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-8">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Vision</h3>
            <p className="text-gray-600">
              To become East Africa's most loved electronics marketplace, empowering people through technology and innovation.
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">Why Choose NovaTech RW?</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: '✅', title: '100% Authentic', desc: 'All products are genuine and quality verified' },
            { icon: '🚚', title: 'Fast Delivery', desc: 'Same day delivery in Kigali' },
            { icon: '💳', title: 'Easy Payments', desc: 'MTN MoMo, Airtel Money, Cash' },
            { icon: '🔧', title: 'After Sales', desc: '1 year warranty on all electronics' },
          ].map((item) => (
            <div key={item.title} className="bg-white rounded-xl shadow p-6 text-center">
              <div className="text-4xl mb-3">{item.icon}</div>
              <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
              <p className="text-gray-500 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Team */}
      <div className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-lg"
                />
                <h4 className="font-bold text-gray-900 text-lg">{member.name}</h4>
                <p className="text-green-600 font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-green-600 text-white text-center py-16 px-4">
        <h2 className="text-3xl font-bold mb-4">Ready to Shop?</h2>
        <p className="text-green-100 mb-8">Explore our wide range of premium electronics today.</p>
        <Link to="/products" className="bg-white text-green-700 font-bold px-10 py-3 rounded-lg hover:bg-gray-100 transition">
          Shop Now
        </Link>
      </div>
    </div>
  );
};

export default About;