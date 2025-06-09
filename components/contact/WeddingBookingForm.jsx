"use client";
import Image from "next/image";
import React, { useState } from "react";
import backicon from "../../asset/images/back-button.svg";

const WeddingBookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    guests: "",
    city: "",
    agree: false,
  });

  const [step, setStep] = useState(0);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = () => {
    alert("Form Submitted!\n" + JSON.stringify(formData, null, 2));
  };

  const steps = [
    {
      label: "Personal Info",
      content: (
        <>
          <div className="flex flex-col gap-4 mb-4">
            <label htmlFor="Name" className="">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="border p-2 w-full mb-4"
            />
          </div>
          <div className="flex flex-col gap-4 mb-4">
            <label htmlFor="Name" className="">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="EMail"
              value={formData.email}
              onChange={handleChange}
              className="border p-2 w-full mb-4"
            />
          </div>
          <div className="flex flex-col gap-4 mb-4">
            <label htmlFor="Name" className="">
              Phone No.
            </label>
            <input
              type="number"
              name="phone"
              placeholder="Phone No."
              value={formData.phone}
              onChange={handleChange}
              className="border p-2 w-full mb-4"
            />
          </div>
        </>
      ),
    },
    {
      label: "Address",
      content: (
        <>
          <div className="flex flex-col gap-4 mb-4">
            <label htmlFor="Name" className="">
              Preferred wedding Date
            </label>
            <input
              id="date"
              type="date"
              name="date"
              placeholder="date"
              value={formData.date}
              onChange={handleChange}
              className="border p-2 w-full mb-4"
            />
          </div>
          <div className="flex flex-col gap-4 mb-4">
            <label htmlFor="Name" className="">
              No. of guests
            </label>
            <input
              type="number"
              name="guests"
              placeholder="100"
              value={formData.guests}
              onChange={handleChange}
              className="border p-2 w-full mb-4"
            />
          </div>
          <div className="flex flex-col gap-4 mb-4">
            <label htmlFor="Name" className="">
              Name of the city
            </label>
            <select
              className="w-full border border-gray-300 rounded-md p-2"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
            >
              <option>Dehradun</option>
              <option>Haridwar</option>
              <option>New Tehri</option>
            </select>
          </div>
          <div className="flex gap-2 items-start">
            <input
              type="checkbox"
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
              className="accent-[#A42D2B]"
            />
            <label htmlFor="agree" className="text-sm">
              I'm happy to be contacted by the Tryshaadi team about my enquiry.
            </label>
          </div>
        </>
      ),
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 mb-5">
      <h2 className="text-[35px] md:text-[52px] text-center mb-10 raleway">
        Book your <span className="text-[#A42D2B] font-bold">Dream</span>{" "}
        Wedding!
      </h2>

      {/* Desktop Form */}
      <div className="hidden md:block max-w-[1200px] w-full rounded-[22px] bg-white shadow-[0px_4px_31.8px_rgba(0,0,0,0.18)] p-8">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
        >
          <div>
            <h3 className="text-lg font-semibold mb-4">Personal Details</h3>
            <div className="mb-4 flex flex-col gap-2">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                type="text"
                className="border border-gray-300 rounded-md p-2"
              />
            </div>
            <div className="mb-4 flex flex-col gap-2">
              <label htmlFor="phone">Phone No.</label>
              <input
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                type="tel"
                className="border border-gray-300 rounded-md p-2"
              />
            </div>
            <div className="mb-4 flex flex-col gap-2">
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                className="border border-gray-300 rounded-md p-2"
              />
            </div>
            <div className="flex gap-2 items-center">
              <input
                type="checkbox"
                name="agree"
                checked={formData.agree}
                onChange={handleChange}
                className="accent-[#A42D2B]"
              />
              <label htmlFor="agree" className="text-sm">
                I'm happy to be contacted by the Tryshaadi team about my
                enquiry.
              </label>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Wedding Plans</h3>
            <div className="flex gap-4 mb-4">
              <div className="flex flex-col gap-2 w-[200px]">
                <label htmlFor="date">Preferred Wedding Date</label>
                <input
                  id="date"
                  name="date"
                  type="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md p-2"
                />
              </div>
              <div className="flex flex-col gap-2 w-[200px]">
                <label htmlFor="guests">No. of guests</label>
                <input
                  id="guests"
                  name="guests"
                  type="number"
                  value={formData.guests}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md p-2"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2 w-[250px]">
              <label htmlFor="city">City</label>
              <select
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="border border-gray-300 rounded-md p-2"
              >
                <option value="">Select</option>
                <option value="Dehradun">Dehradun</option>
                <option value="Haridwar">Haridwar</option>
                <option value="New Tehri">New Tehri</option>
              </select>
            </div>
          </div>
        </form>

        <div className="text-center mt-8">
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-[#FFB52C] text-black font-semibold px-6 py-2 rounded-md shadow-md"
          >
            Start my wedding journey
          </button>
        </div>
      </div>

      {/* Mobile Multi-step Form */}
      <div className="md:hidden max-w-md w-full mt-10 bg-white shadow-[0px_4px_31.8px_rgba(0,0,0,0.18)] rounded-[22px] p-6">
        {step > 0 && (
          <Image
            src={backicon}
            alt="Back"
            className="cursor-pointer mb-4"
            onClick={() => setStep(step - 1)}
          />
        )}
        <h2 className="text-xl font-semibold mb-6 text-center">
          {steps[step].label}
        </h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <div className="transition-all duration-300 ease-in-out">
            {steps[step].content}
          </div>
        </form>
        <div className="flex justify-between mt-6">
          {step < steps.length - 1 ? (
            <button
              onClick={() => setStep(step + 1)}
              className="px-4 py-2 bg-[#FFB52C] rounded m-auto"
            >
              Next
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              className="px-4 py-2 bg-[#FFB52C] rounded m-auto"
            >
              Start my wedding journey
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default WeddingBookingForm;
