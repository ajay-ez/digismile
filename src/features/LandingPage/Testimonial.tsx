// pages/index.tsx
import {
  testimonial_1,
  testimonial_2,
  testimonial_3,
  testimonial_4
} from "@/assets/images";
import TestimonialReview from "@/components/common/TestimonialReview";
import { Typography, Box, Grid } from "@mui/material";
import React from "react";

const testimonials = [
  {
    username: "John Doe",
    userImage: testimonial_1,
    profession: "Software Engineer",
    review:
      "I had a fantastic experience at this dental clinic! The staff was incredibly friendly, and the care I received was top-notch. From routine cleanings to more complex procedures, they ensure everything is done with the highest level of professionalism."
  },
  {
    username: "Jane Smith",
    userImage: testimonial_2,
    profession: "Graphic Designer",
    review:
      "This dental clinic exceeded my expectations! The team is attentive and thorough, making every visit pleasant. They provide comprehensive dental care and always take the time to explain procedures and options, which I greatly appreciate."
  },
  {
    username: "Emily Johnson",
    userImage: testimonial_3,
    profession: "Marketing Manager",
    review:
      "An exceptional dental clinic! Their expertise in both preventive and cosmetic dentistry is impressive. The team is knowledgeable and dedicated to providing personalized care."
  },
  {
    username: "Michael Brown",
    userImage: testimonial_4,
    profession: "Financial Advisor",
    review:
      "Outstanding dental care! The clinic offers a wide range of services with a focus on comfort and patient satisfaction. From routine check-ups to advanced treatments, they have consistently provided excellent care and support."
  }
];

const Testimonial: React.FC = () => {
  return (
    <div className="bg-blue-white-gradient">
      <Box className="flex justify-center">
        <Typography variant="h1" className="text-center p-3 font-bold">
          Testimonials
        </Typography>
      </Box>

      <div className="p-4">
        <Grid container>
          {testimonials.map((testimonial, index) => (
            <Grid item xs={12} md={6} key={index}>
              <TestimonialReview
                username={testimonial.username}
                userImage={testimonial.userImage}
                profession={testimonial.profession}
                review={testimonial.review}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default Testimonial;
