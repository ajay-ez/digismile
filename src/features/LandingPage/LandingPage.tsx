import React, { useEffect } from "react";
import "aos/dist/aos.css";
import LandingPageVideo from "./LandingPageVideo";
import LocationSection from "./LocationSection";

import AOS from "aos";
import useAuthCheck from "@/hooks/useAuthCheck";
import { Box, Divider, Flex, Text, useMediaQuery } from "@chakra-ui/react";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import ImageGallery from "../Image-gallery";
import PatientReviews from "../patient-reviews";
import ServiceSection from "../services-section";
import SmileGallery from "../smile-gallery";
import { ProcessForPatient } from "../contact-us/ProcessForPatient";
import MissionComponent from "../mission";
import WhyChooseUsComponent from "../why-choose-us";

const LandingPage = () => {
  const isUserAuthorize = useAuthCheck();
  const [isMobile] = useMediaQuery("(max-width: 1000px)");

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false
    });
  }, []);

  return (
    <Box position={"relative"}>
      <Navbar />
      <LandingPageVideo />
      <LocationSection />
      <ImageGallery />
      <MissionComponent />
      <ServiceSection />
      <WhyChooseUsComponent />
      <SmileGallery />
      <Divider />
      <PatientReviews />
      <Divider />
      <ProcessForPatient />
      {/* {isUserAuthorize && <UserWelcome />} */}
      {/* <WhoWeAre /> */}
      {/* <Gallery /> */}
      {/* <Testimonial /> */}
      {/* <div
        id="schedule"
        data-aos="fade-up"
        data-aos-delay="100"
        className="mx-4 "
      >
        <ClinicSchedule renderToHome={true} />
      </div> */}
      {/* <ContactUs /> */}
      <Footer />
    </Box>
  );
};

export default LandingPage;
