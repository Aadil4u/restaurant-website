import React, { useState, useEffect } from "react";
import { reviews } from "./data/reviews";
import { menuCategories } from "./data/menu";

// Star Rating Component
const StarRating = ({ rating }) => {
  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-5 h-5 ${
            star <= rating ? "text-gold" : "text-gray-300"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

// MenuItem Component
const MenuItem = ({ name, description, price }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
      <h3 className="text-xl font-semibold text-charcoal mb-2">{name}</h3>
      <p className="text-gray-600 text-sm mb-3 leading-relaxed">
        {description}
      </p>
      <div className="text-lg font-bold text-warm-red">₹{price}</div>
    </div>
  );
};

// ReviewCard Component
const ReviewCard = ({ review, name, rating }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
      <div className="mb-4">
        <StarRating rating={rating} />
      </div>
      <p className="text-gray-700 italic mb-4 leading-relaxed">"{review}"</p>
      <div className="text-charcoal font-semibold">— {name}</div>
    </div>
  );
};

// Navbar Component
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div
            className={`text-2xl font-playfair font-bold cursor-pointer transition-colors duration-300 ${
              isScrolled ? "text-charcoal" : "text-white"
            }`}
            onClick={() => scrollToSection("home")}
          >
            Lazeez
          </div>

          <div className="hidden md:flex space-x-8">
            {[
              { name: "Home", id: "home" },
              { name: "Menu", id: "menu" },
              { name: "About", id: "about" },
              { name: "Reviews", id: "reviews" },
              { name: "Contact", id: "contact" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-medium transition-colors duration-300 hover:text-gold ${
                  isScrolled ? "text-charcoal" : "text-white"
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              className={`transition-colors duration-300 ${
                isScrolled ? "text-charcoal" : "text-white"
              }`}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

// Hero Component
const Hero = () => {
  const scrollToMenu = () => {
    const element = document.getElementById("menu");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center bg-gradient-to-r from-black/70 to-black/50"
      style={{
        backgroundImage: `url('https://lh3.googleusercontent.com/p/AF1QipMqIB_fKTEZat64BhZ2-mCeC_Pa9212GVO_iyAV=s1360-w1360-h1020-rw')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-6 leading-tight">
          Lazeez Restaurant
        </h1>
        <p className="text-xl md:text-2xl mb-8 font-light leading-relaxed">
          Authentic Indian Flavors in the Heart of Veraval
        </p>
        <button
          onClick={scrollToMenu}
          className="bg-warm-red hover:bg-deep-red text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          View Our Menu
        </button>
      </div>
    </section>
  );
};

// About Component
const About = () => {
  return (
    <section id="about" className="py-20 bg-cream">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-playfair font-bold text-center text-charcoal mb-12">
          Our Story
        </h2>
        <div className="space-y-6 text-lg leading-relaxed text-gray-700">
          <p>
            Nestled on Veraval Talala Road, Lazeez Restaurant is a cherished
            culinary haven where tradition meets innovation. We are dedicated to
            serving authentic Indian cuisine crafted from the finest local
            ingredients.
          </p>
          <p>
            Our commitment to quality, delightful flavors, and exceptional
            service invites you to savor a dining experience like no other.
          </p>
        </div>
      </div>
    </section>
  );
};

// Menu Component
const Menu = () => {
  return (
    <section id="menu" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-playfair font-bold text-center text-charcoal mb-16">
          Explore Our Menu
        </h2>

        {menuCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-16">
            <h3 className="text-2xl md:text-3xl font-semibold text-warm-red mb-8 text-center">
              {category.title}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.items.map((item, itemIndex) => (
                <MenuItem
                  key={itemIndex}
                  name={item.name}
                  description={item.description}
                  price={item.price}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// Reviews Component
const Reviews = () => {
  return (
    <section id="reviews" className="py-20 bg-cream">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-playfair font-bold text-center text-charcoal mb-16">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reviews.map((review, index) => (
            <ReviewCard
              key={index}
              review={review.review}
              name={review.name}
              rating={review.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Contact Component
const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-playfair font-bold text-center text-charcoal mb-16">
          Visit Us
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-warm-red mb-4">
                Location
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Veraval Talala Road, Opposite Kismat Provision
                <br />
                Veraval, Gujarat
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-warm-red mb-4">
                Hours
              </h3>
              <p className="text-gray-700 text-lg">
                Open Daily: 6:30 AM – 12:00 AM
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-warm-red mb-4">
                Phone
              </h3>
              <p className="text-gray-700 text-lg">
                <a
                  href="tel:+919876543210"
                  className="hover:text-warm-red transition-colors"
                >
                  +91 98765 43210
                </a>
              </p>
            </div>
          </div>

          {/* Google Maps */}
          <div className="h-80 lg:h-full min-h-80 rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14747.5!2d70.3667!3d20.9167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39580a64b5e6dc25%3A0x8d4c3c5c8b5a1c5e!2sVeraval%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lazeez Restaurant Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-charcoal text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-playfair font-bold mb-2">
              Lazeez Restaurant
            </h3>
            <p className="text-gray-400">Authentic Indian Flavors</p>
          </div>

          <div className="flex space-x-6 mb-6 md:mb-0">
            <a
              href="https://twitter.com/lazeezrestaurant"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gold transition-colors"
              aria-label="Twitter"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </a>
            <a
              href="https://facebook.com/lazeezrestaurant"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gold transition-colors"
              aria-label="Facebook"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
              </svg>
            </a>
            <a
              href="https://instagram.com/lazeezrestaurant"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gold transition-colors"
              aria-label="Instagram"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.112.221.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-12C24.007 5.367 18.641.001 12.017.001z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Lazeez Restaurant Veraval. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

// Main App Component
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
