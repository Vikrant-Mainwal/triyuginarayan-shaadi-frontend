"use client";
import Image from "next/image";
import React, { useState } from "react";
import image from "../../asset/images/wedding-hand.png";
import Slogan from "../../asset/images/logo/logo-slogan.svg";
import BookWedding from "../../asset/images/book-wedding.svg";
import { IoIosCloseCircle } from "react-icons/io";
import { useRouter } from "next/navigation";

const TopUpForm = ({ onClose }) => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
  });
  const [loading, setLoading] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be 10 digits.";
    }

    if (!formData.date.trim()) newErrors.date = "Date is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setIsClosing(true);
        setTimeout(() => {
          onClose();
          router.push("/thank-you");
        }, 300);
      } else {
        alert("Something went wrong");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`fixed inset-0 bg-black/50 flex items-center justify-center z-50 transition-opacity duration-300 ${
        isClosing ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="bg-white rounded-[22px] flex flex-col md:flex-row w-[90%] max-w-3xl shadow-lg relative overflow-hidden">
        <div
          className="absolute top-4 right-4 cursor-pointer text-gray-500"
          onClick={handleClose}
        >
          <IoIosCloseCircle className="w-[50px] h-[50px]" />
        </div>

        <div className="w-full md:w-1/2 p-6 md:p-10 bg-[#FFF9F4]">
          <Image src={Slogan} alt="logo" className="w-20 mb-4" />
          <div>
            <Image src={BookWedding} alt="image" />
          </div>

          <form className="space-y-4 mt-4">
            <div className="flex flex-col gap-1 text-start">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className={`w-full border px-4 py-2 rounded border-gray-300
                }`}
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name}</p>
              )}
            </div>

            <div className="flex flex-col gap-1 text-start">
              <label htmlFor="phone">Phone Number</label>
              <input
                id="phone"
                name="phone"
                type="text"
                inputMode="numeric"
                pattern="\d*"
                maxLength={10}
                placeholder="Phone No."
                value={formData.phone}
                onChange={handleChange}
                className={`w-full border px-4 py-2 rounded border-gray-300
                 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none`}
              />
              {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone}</p>
              )}
            </div>

            <div className="flex flex-col gap-1 text-start">
              <label htmlFor="date">Date</label>
              <input
                id="date"
                name="date"
                type="date"
                value={formData.date}
                onChange={handleChange}
                className={`w-full border px-4 py-2 rounded border-gray-300
                }`}
              />
              {errors.date && (
                <p className="text-red-500 text-sm">{errors.date}</p>
              )}
            </div>

            <button
              type="button"
              className={`bg-[#FFB52C] font-semibold py-4 px-6 rounded w-full mt-10 mb-5 ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading ? (
                <div className="flex items-center justify-center gap-2">
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    />
                  </svg>
                  Loading...
                </div>
              ) : (
                "Plan your Wedding"
              )}
            </button>
          </form>
        </div>

        <div className="hidden md:block md:w-1/2">
          <Image
            src={image}
            alt="Wedding"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default TopUpForm;
