// PLUGINS
import { useState } from "react";

// CONTACT
export default function Contact() {
  const [messageSent, setMessageSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent page reload
    setMessageSent(true);
  };

  return (
    <div className="flex flex-col items-center w-full h-[800px] pt-20">
      <div className="max-w-md bg-orange-950 bg-opacity-90 p-5 shadow-lg w-full">
        <h1 className="text-center text-white text-2xl font-thin">Contact</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="first-name" className="text-gray-200 text-md">
              First Name*
            </label>
            <input
              id="first-name"
              name="first-name"
              type="text"
              required
              aria-required="true"
              className="w-full px-4 py-2 mt-1 bg-gray-200 border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="last-name" className="text-gray-200 text-md">
              Last Name*
            </label>
            <input
              id="last-name"
              name="last-name"
              type="text"
              required
              aria-required="true"
              className="w-full px-4 py-2 mt-1 bg-gray-200 border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="email" className="text-gray-200 text-md">
              Email*
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              aria-required="true"
              className="w-full px-4 py-2 mt-1 bg-gray-200 border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="message" className="text-gray-200 text-md">
              Message*
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              rows={7}
              required
              aria-required="true"
              className="w-full px-4 py-2 mt-1 bg-gray-200 border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={messageSent}
            className={`w-full py-2 font-semibold transition-all duration-500 ${
              messageSent
                ? "bg-gray-500 text-white cursor-not-allowed"
                : "bg-black text-white hover:bg-white hover:text-black"
            }`}
            aria-disabled={messageSent}
          >
            {messageSent ? "Message Sent" : "Send Message"}
          </button>
        </form>
      </div>

      <div
        className={`text-center text-white text-3xl pt-6 font-[cursive] font-bold transition-opacity duration-1000 ${
          messageSent ? "opacity-100" : "opacity-0"
        }`}
      >
        <p>Thank you!</p>
        <p className="text-white text-xl text-center font-semibold mx-5 font-[cursive] font-bold">
          David Glass will get back to you soon.
        </p>
      </div>
    </div>
  );
}

// Note: ADA Compliance - aria-require, aria-disabled, aria-live=polite, tab-index,and html-for
