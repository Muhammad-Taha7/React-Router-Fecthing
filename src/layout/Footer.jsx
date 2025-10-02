export const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <img
            className="h-16"
            src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/05/logo-contest-1-e1527122253952.png?auto=format&q=60&fit=max&w=930"
            alt="logo"
          />
        </div>

        {/* Grid Columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
          {/* About */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-gray-400">
              We provide the best quality products with a focus on customer satisfaction. 
              Shop with us and enjoy exclusive deals.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/" className="hover:text-blue-400">Home</a></li>
              <li><a href="/collection" className="hover:text-blue-400">Collections</a></li>
              <li><a href="/about" className="hover:text-blue-400">About</a></li>
              <li><a href="/contact" className="hover:text-blue-400">Contact</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-blue-400">FAQs</a></li>
              <li><a href="#" className="hover:text-blue-400">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-blue-400">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-400">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Connected</h3>
            <p className="text-gray-400 mb-3">Subscribe to our newsletter for updates</p>
            <div className="flex items-center bg-white rounded overflow-hidden">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-3 py-2 text-black w-full outline-none"
              />
              <button className="bg-blue-500 px-4 py-2 hover:bg-blue-600 transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>© 2025 Taha Store. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" alt="Visa" className="h-6" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png" alt="Mastercard" className="h-6" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Paypal_2014_logo.png" alt="Paypal" className="h-6" />
          </div>
        </div>
      </div>
    </footer>
  );
};
