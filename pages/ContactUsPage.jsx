import ContactSupportHero from "@/components/contact/ContactSupportHero";
import WeddingBookingForm from "@/components/contact/WeddingBookingForm";
import React from "react";

const ContactUsPage = () => {
  return (
    <div className="max-w-[1366px] w-full mx-auto">
      <ContactSupportHero />

      <WeddingBookingForm />
    </div>
  );
};

export default ContactUsPage;
