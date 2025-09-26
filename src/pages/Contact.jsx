import React from "react";
import { Mail, Phone, MapPin, Send, PhoneCall, Clock } from "lucide-react";
import FAQs from "../support/FAQs";
import NeedHelp from "../support/NeedHelp";

const Contact = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16 bg-gray-50">
      {/* ===== Header Section ===== */}
      <section className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Get In Touch
        </h2>
        <p className="text-gray-600 text-lg">
          Multiple ways to reach us
        </p>
      </section>

      {/* ===== Value Cards Section ===== */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-20">
        {[
          {
            icon: <Mail className="w-10 h-10 text-purple-600 mx-auto mb-4" />,
            title: "Email Us",
            desc: (
              <>
                <p className="text-sm">support@birhanu.et</p>
                <p className="text-sm">sales@birhanu.et</p>
                <p className="text-sm">We reply within 24 hours</p>
              </>
            ),
          },
          {
            icon: <PhoneCall className="w-10 h-10 text-purple-600 mx-auto mb-4" />,
            title: "Call Us",
            desc: (
              <>
                <p className="text-sm">+251 999 999 999</p>
                <p className="text-sm">+251 999 888 777</p>
                <p className="text-sm">Mon–Fri: 9AM–6PM | Sat: 10AM–4PM</p>
              </>
            ),
          },
          {
            icon: <MapPin className="w-10 h-10 text-purple-600 mx-auto mb-4" />,
            title: "Visit Us",
            desc: (
              <>
                <p className="text-sm">Addis Ababa, Ethiopia</p>
                <p className="text-sm">Come visit our showroom</p>
              </>
            ),
          },
          {
            icon: <Clock className="w-10 h-10 text-purple-600 mx-auto mb-4" />,
            title: "Business Hours",
            desc: (
              <>
                <p className="text-sm">Mon–Fri: 9AM–6PM</p>
                <p className="text-sm">Sat: 10AM–4PM</p>
                <p className="text-sm">Sun: Closed</p>
              </>
            ),
          },
        ].map((card, idx) => (
          <div
            key={idx}
            className="p-6 rounded-2xl shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-1 bg-white text-center border border-gray-100"
          >
            {card.icon}
            <h3 className="font-semibold text-lg mb-2 text-gray-800">
              {card.title}
            </h3>
            <div className="text-gray-600 text-sm">{card.desc}</div>
          </div>
        ))}
      </section>

      {/* ===== Contact Us Section ===== */}
      <section>
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Contact Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <form className="space-y-6 bg-white shadow-lg rounded-2xl p-8 border border-gray-100">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Message Subject"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                rows="5"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition font-semibold"
            >
              <Send size={18} />
              Send Message
            </button>
          </form>

          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-800">
              Our Location
            </h3>
            <p className="flex items-center gap-3 text-gray-700">
              <MapPin className="text-purple-600" size={20} />
              Addis Ababa, 4 Killo
            </p>
            <p className="flex items-center gap-3 text-gray-700">
              <Mail className="text-purple-600" size={20} />
              support@B-shop.com
            </p>
            <p className="flex items-center gap-3 text-gray-700">
              <Phone className="text-purple-600" size={20} />
              +251 123-456-789
            </p>

            {/* Embedded Map */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.994553915769!2d38.75775917504133!3d9.019197490814308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b853a2f5efcfb%3A0x54f4e52cb2c5f788!2sAddis%20Ababa%2C%20Ethiopia!5e0!3m2!1sen!2set!4v1691234567890!5m2!1sen!2set"
              width="100%"
              height="250"
              allowFullScreen=""
              loading="lazy"
              title="Addis Ababa Map"
              className="border rounded-lg shadow-md"
            ></iframe>
          </div>
        </div>
      </section>

      {/* ===== Extra Sections ===== */}
      <div className="mt-16">
        <FAQs />
      </div>
      <div className="mt-10">
        <NeedHelp />
      </div>
    </div>
  );
};

export default Contact;
