import ContactSupportHero from "@/components/contact/ContactSupportHero";
import React from "react";

const ContactUsPage = () => {
  return (
    <div>
      <ContactSupportHero />

      <div>
        <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h2 className="text-[35px] md:text-[52px] raleway text-center "> Book your <span className="text-[#A42D2B] font-bold">Dream</span> Wedding
            !</h2>
        <div className="max-w-[1200px] w-full rounded-[22px] bg-white shadow-[0px_4px_31.8px_0px_rgba(0,0,0,0.25)] p-8 ">
          

          <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-lg font-semibold mb-4">Personal Details</h2>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full border border-gray-300 rounded-md p-2"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Phone no.</label>
                <input
                  type="tel"
                  placeholder="Phone no."
                  className="w-full border border-gray-300 rounded-md p-2"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">
                  Email address
                </label>
                <input
                  type="email"
                  className="w-full border border-gray-300 rounded-md p-2"
                />
              </div>
              <div className="flex items-start gap-2">
                <input type="checkbox" className="mt-1 accent-[#A42D2B]" />
                <label className="text-sm">
                  I'm happy to be contacted by the Tryshaadi team about my
                  enquiry.
                </label>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-4">Wedding Plans</h2>
              <div className="mb-4">
                <label class="block text-sm font-medium mb-1">
                  Preferred wedding Date
                </label>
                <input
                  type="date"
                  className="w-full border border-gray-300 rounded-md p-2"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">
                  No. of guests (approx.)
                </label>
                <input
                  type="number"
                  className="w-full border border-gray-300 rounded-md p-2"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">
                  Name of your city?
                </label>
                <select className="w-full border border-gray-300 rounded-md p-2">
                  <option>Dehradun</option>
                  <option>Haridwar</option>
                  <option>New Tehri</option>
                </select>
              </div>
            </div>
          </form>

          <div className="text-center mt-8">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-2 rounded-md shadow-md">
              Start my wedding journey
            </button>
          </div>
        </div>
      </div>
      </div>

      
    </div>
  );
};

export default ContactUsPage;
