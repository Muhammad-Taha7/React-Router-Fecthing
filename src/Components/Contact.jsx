export const Contact = () => {
  return (
    <div className="contact-page bg-black text-white min-h-screen">
      {/* Heading */}
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-gray-400">
          We'd love to hear from you! Fill out the form or visit us at our store.
        </p>
      </section>

      {/* Contact Section */}
      <section className="grid md:grid-cols-2 gap-10 px-6 md:px-20 py-12">
        {/* Contact Form */}
        <div className="bg-gray-900 p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              rows="5"
              placeholder="Your Message"
              className="p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 transition text-white font-semibold py-3 rounded"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Google Map */}
        <div className="rounded-lg overflow-hidden shadow-lg h-[400px]">
          <iframe
            title="store-location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.7921055389566!2d67.02278971500295!3d24.860734984065872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33dd53e81f0d7%3A0x3e04c45752c5ab07!2sDolmen%20Mall%20Clifton!5e0!3m2!1sen!2s!4v1695398385073!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </div>
  );
};
