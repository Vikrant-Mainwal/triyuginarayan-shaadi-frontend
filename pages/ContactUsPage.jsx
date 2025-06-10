import ContactInfo from "@/components/contact/ContactInfo";
import ContactSupportHero from "@/components/contact/ContactSupportHero";
import WeddingBookingForm from "@/components/contact/WeddingBookingForm";
import React from "react";

const ContactUsPage = () => {
  return (
    <div className="max-w-[1400px] w-full mx-auto">
      <ContactSupportHero />
      <WeddingBookingForm />
      <ContactInfo />
    </div>
  );
};

export default ContactUsPage;
