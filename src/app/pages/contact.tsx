// NOTE: You ended up choosing to do formspree manually without npm i formspree because formspree does not work with react 19 yet, only react 18 and lower (you also uninstalled yup and formik). 

// PLUGINS
import { useState } from "react";

// CONTACT FORM
export default function Contact() {
  const [messageSent, setMessageSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Handles form submission to Formspree
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent page reload
    setLoading(true);
    setError(null);

    // Collect form data
    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setMessageSent(true);
        e.currentTarget.reset(); // Clear form after successful submission
      } else {
        throw new Error("Something went wrong. Please try again.");
      }
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center w-full h-[800px] pt-20">
      <div className="max-w-md bg-orange-950 bg-opacity-90 p-5 shadow-lg w-full">
        <h1 className="text-center text-white text-2xl font-thin">Contact</h1>

        {/* Show Success Message */}
        {messageSent ? (
          <div className="text-center text-white text-3xl pt-6 font-[cursive] font-bold">
            <p>Thank you!</p>
            <p className="text-white text-xl text-center font-semibold mx-5 font-[cursive] font-bold">
              David Glass will get back to you soon.
            </p>
          </div>
        ) : (
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

            {/* Show Error Message if Form Submission Fails */}
            {error && <p className="text-red-500 text-sm">{error}</p>}

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-2 font-semibold transition-all duration-500 ${
                loading
                  ? "bg-gray-500 text-white cursor-not-allowed"
                  : "bg-black text-white hover:bg-white hover:text-black"
              }`}
              aria-disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
