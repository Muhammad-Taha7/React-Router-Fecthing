export const Home = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-[url('https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center h-[70vh] flex items-center justify-center">
        <div className="bg-black bg-opacity-50 p-10 rounded-lg text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to Taha Store
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Discover our exclusive collections and enjoy premium shopping.
          </p>
          <button className="bg-blue-500 px-6 py-3 text-lg rounded hover:bg-blue-600 transition">
            Shop Now
          </button>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 px-6 md:px-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div>
          <h3 className="text-xl font-semibold mb-2">Free Shipping</h3>
          <p className="text-gray-600">Get free delivery on orders above $50.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
          <p className="text-gray-600">We are here to help you anytime.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Secure Payments</h3>
          <p className="text-gray-600">Your transactions are safe with us.</p>
        </div>
      </section>

     

      
    </div>
  );
};
