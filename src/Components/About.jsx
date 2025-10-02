export const About = () => {
  return (
    <div className="about-page bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&q=80&w=1920')" }}>
        <div className="absolute inset-0 bg-black/60"></div>
        <h1 className="relative text-5xl font-bold text-center">About Us</h1>
      </section>

      {/* About Content */}
      <section className="py-16 px-6 md:px-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            We are a passionate team of developers, designers, and creators focused on delivering 
            high-quality products to our customers. Our mission is to create solutions that not only 
            look good but also work seamlessly in the real world.
          </p>
          <p className="text-gray-400">
            With years of experience in web development, e-commerce, and user experience, 
            we aim to make technology simple, accessible, and meaningful for everyone.
          </p>
        </div>
        <div className="flex justify-center">
          <img
            src="https://img.freepik.com/free-vector/teamwork-concept-landing-page_52683-21307.jpg?size=626&ext=jpg"
            alt="About us"
            className="rounded-lg shadow-lg max-w-md"
          />
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-900 px-6 md:px-20 text-center">
        <h2 className="text-3xl font-bold mb-6">Our Mission & Vision</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 bg-gray-800 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
            <p className="text-gray-400">
              To innovate and provide top-notch services that help businesses and individuals grow in the digital world.
            </p>
          </div>
          <div className="p-6 bg-gray-800 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
            <p className="text-gray-400">
              To become a global leader in digital solutions by building trust and delivering value to our clients.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-center mb-10">Meet Our Team</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {[
            { name: "Taha", role: "Frontend Developer", img: "https://randomuser.me/api/portraits/men/32.jpg" },
            { name: "Sara", role: "UI/UX Designer", img: "https://randomuser.me/api/portraits/women/44.jpg" },
            { name: "Ali", role: "Backend Engineer", img: "https://randomuser.me/api/portraits/men/65.jpg" },
          ].map((member, i) => (
            <div key={i} className="bg-gray-900 p-6 rounded-lg text-center shadow-md hover:scale-105 transition-transform">
              <img src={member.img} alt={member.name} className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-blue-500" />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-400">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call To Action */}
      <section className="py-16 bg-blue-600 text-center">
        <h2 className="text-3xl font-bold mb-4">Want to work with us?</h2>
        <p className="mb-6 text-white/90">Join hands with us and grow your business digitally.</p>
        <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
};
