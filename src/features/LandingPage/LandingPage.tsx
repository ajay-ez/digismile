import React, { useEffect } from "react";
import "aos/dist/aos.css";
import LandingPageVideo from "./LandingPageVideo";
import Services from "./Services";

import WhoWeAre from "./WhoWeAre";
import Testimonial from "./Testimonial";
import ContactUs from "./ContactUs";
import AOS from "aos";
import DigiLayout from "@/components/Layout";
import { ClinicSchedule } from "@/components/common/ClinicSchedule";
import useAuthCheck from "@/hooks/useAuthCheck";
import UserWelcome from "./UserWelcome";
import Gallery from "./Gallery";

const LandingPage = () => {
  const isUserAuthorize = useAuthCheck();
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false
    });
  }, []);

  return (
    <DigiLayout>
      <div className="flex flex-col gap-24">
        <div data-aos="fade-up">
          <LandingPageVideo />
          {isUserAuthorize && <UserWelcome />}
        </div>

        <div id="services" data-aos="fade-up" data-aos-delay="100">
          <Services />
        </div>

        {/* {!isUserAuthorize && (
          <div
            id="book_appointment"
            data-aos="fade-up"
            data-aos-delay="100"
            className="bg-blue-white-gradient"
          >
            <BookAppointment />
          </div>
        )} */}
        <div id="about" data-aos="fade-up" data-aos-delay="100">
          <WhoWeAre />
        </div>
        <div id="gallery" data-aos="fade-up" data-aos-delay="100">
          <Gallery />
        </div>
        <div id="testimonials" data-aos="fade-up" data-aos-delay="100">
          <Testimonial />
        </div>
        <div
          id="schedule"
          data-aos="fade-up"
          data-aos-delay="100"
          className="mx-4 "
        >
          <ClinicSchedule renderToHome={true} />
        </div>
        <div id="contact" data-aos="fade-up" data-aos-delay="100">
          <ContactUs />
        </div>
      </div>
    </DigiLayout>
  );
};

export default LandingPage;
