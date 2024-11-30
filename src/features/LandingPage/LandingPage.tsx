import React, { useEffect } from "react";
import "aos/dist/aos.css";
import LandingPageVideo from "./LandingPageVideo";
import LocationSection from "./LocationSection";

import WhoWeAre from "./WhoWeAre";
import Testimonial from "./Testimonial";
import ContactUs from "./ContactUs";
import AOS from "aos";
import { ClinicSchedule } from "@/components/common/ClinicSchedule";
import useAuthCheck from "@/hooks/useAuthCheck";
import UserWelcome from "./UserWelcome";
import Gallery from "./Gallery";
import { Box, Divider } from "@chakra-ui/react";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import ImageGallery from "../Image-gallery";
import dynamic from "next/dynamic";
import PatientReviews from "../patient-reviews";
import ServiceSection from "../services-section";
import SmileGallery from "../smile-gallery";
// import PatientReviews from "../patient-reviews";

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
      <LandingPageVideo />
      <LocationSection />
      <ImageGallery />
      <Divider />
      <ServiceSection />
      <Divider />
      <SmileGallery />
      <Divider />
      <PatientReviews />
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
