

export default function About() {
  return (
    <div className="bg-[#fffaf2] text-gray-900">

      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center bg-[url('/ashram-bg.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold">About Us</h1>
          <p className="mt-4 text-lg text-gray-200">
            Home • About Us
          </p>
        </div>
      </section>

      {/* About Content Section */}
      <section className="py-20 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div>
          <img
            src="/about-ashram.jpg"
            alt="Bethel Ashram"
            className="rounded-2xl shadow-lg"
          />
        </div>

        {/* Text */}
        <div>
          <h3 className="text-yellow-600 font-semibold mb-2">About Bethel Ashram</h3>
          <h2 className="text-4xl font-bold mb-6 leading-snug">
            Building Homes. Restoring Hope. Uplifting Lives.
          </h2>
          <p className="text-lg leading-relaxed mb-6 text-gray-700">
            Bethel Ashram is a place born from compassion — a humble effort to serve humanity through
            love, care, and community. We believe that true faith is reflected in our actions, and that
            every act of kindness has the power to change lives.
          </p>
          <p className="text-lg leading-relaxed text-gray-700">
            Our current mission is one close to our hearts: building a home for families and individuals
            who have lived too long without one. This project began with prayer and hope — a foundation laid
            by the hands of those who believe in giving, sharing, and serving. Though the journey is ongoing,
            each helping hand brings us closer to completing this vision.
          </p>

          <button className="mt-8 px-6 py-3 bg-yellow-500 text-white rounded-md font-medium hover:bg-yellow-600 transition">
            Contact Us
          </button>
        </div>
      </section>

      {/* Mission / Values Section */}
      <section className="bg-yellow-100 py-20 text-center">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-yellow-700 mb-10">Our Values & Mission</h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-yellow-600 mb-3">Faith in Action</h3>
              <p className="text-gray-700 leading-relaxed">
                We believe in the divine power of compassion — serving those in need as a reflection of our faith and purpose.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-yellow-600 mb-3">Empathy for All</h3>
              <p className="text-gray-700 leading-relaxed">
                Every individual deserves dignity, respect, and love. We strive to create a community built on care and acceptance.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-yellow-600 mb-3">Hope for Tomorrow</h3>
              <p className="text-gray-700 leading-relaxed">
                With each brick we lay and each soul we uplift, we are building a future filled with hope, light, and belonging.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-yellow-700 mb-12">Our Journey So Far</h2>
        <div className="grid md:grid-cols-4 gap-10">
          <div>
            <h3 className="text-5xl font-bold text-yellow-600">10+</h3>
            <p className="text-gray-700 mt-2">Years of Service</p>
          </div>
          <div>
            <h3 className="text-5xl font-bold text-yellow-600">500+</h3>
            <p className="text-gray-700 mt-2">Lives Uplifted</p>
          </div>
          <div>
            <h3 className="text-5xl font-bold text-yellow-600">30+</h3>
            <p className="text-gray-700 mt-2">Volunteers</p>
          </div>
          <div>
            <h3 className="text-5xl font-bold text-yellow-600">1</h3>
            <p className="text-gray-700 mt-2">Ongoing Housing Project</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative bg-[url('/construction-bg.jpg')] bg-cover bg-center py-24 text-center">
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-white max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Join Hands with Us</h2>
          <p className="text-lg mb-8 text-gray-200 leading-relaxed">
            Together, we can complete what faith has begun — transforming unfinished walls into homes,
            and dreams into reality. Every step forward is a step toward humanity reborn in love.
          </p>
          <a
            href="/donate"
            className="bg-yellow-500 text-white px-8 py-3 rounded-md font-medium hover:bg-yellow-600 transition"
          >
            Support the Project
          </a>
        </div>
      </section>

    </div>
  );
}
