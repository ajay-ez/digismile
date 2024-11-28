import React, { useEffect } from "react";
import "aos/dist/aos.css";
import LandingPageVideo from "./LandingPageVideo";
import Services from "./Services";

import WhoWeAre from "./WhoWeAre";
import Testimonial from "./Testimonial";
import ContactUs from "./ContactUs";
import AOS from "aos";
import { ClinicSchedule } from "@/components/common/ClinicSchedule";
import useAuthCheck from "@/hooks/useAuthCheck";
import UserWelcome from "./UserWelcome";
import Gallery from "./Gallery";
import { Box } from "@chakra-ui/react";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";

const LandingPage = () => {
  const isUserAuthorize = useAuthCheck();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false
    });
  }, []);

  return (
    <Box position={"relative"}>
      <Navbar />
      <>
        <LandingPageVideo />
        {isUserAuthorize && <UserWelcome />}
      </>

      <div>
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
      <div>
        <WhoWeAre />
      </div>
      <div>
        <Gallery />
      </div>
      <div>
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
      <div>
        <ContactUs />
      </div>
      <Footer />
    </Box>
  );
};

export default LandingPage;
