import React, { useEffect } from "react";
import "aos/dist/aos.css";
import NavImageComponent from "./NavImage";
import Services from "./Services";
import BookAppointment from "./BookAppointment";
import AboutUs from "./AboutUs";
import Testimonial from "./Testimonial";
import ContactUs from "./ContactUs";
import UserWelcome from "./UserWelcome";
import AOS from "aos";
import DigiLayout from "@/components/Layout";

const LandingPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false
    });
  }, []);

  return (
    <DigiLayout>
      <div className="flex flex-col gap-4">
        <div data-aos="fade-up">
          <NavImageComponent />
          <UserWelcome />
        </div>

        <div id="services" data-aos="fade-up" data-aos-delay="100">
          <Services />
        </div>
        <div id="about" data-aos="fade-up" data-aos-delay="100">
          <AboutUs />
        </div>
        <div id="testimonials" data-aos="fade-up" data-aos-delay="100">
          <Testimonial />
        </div>
        <div id="book_appointment" data-aos="fade-up" data-aos-delay="100">
          <BookAppointment />
        </div>
        <div id="contact" data-aos="fade-up" data-aos-delay="100">
          <ContactUs />
        </div>
      </div>
    </DigiLayout>
  );
};

export default LandingPage;
