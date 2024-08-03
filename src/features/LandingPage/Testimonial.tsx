// pages/index.tsx
import { dentist } from "@/assets/images";
import TestimonialReview from "@/components/common/TestimonialReview";
import { Typography, Box, Grid } from "@mui/material";
const testimonials = [
  {
    username: "John Doe",
    userImage: dentist,
    profession: "Software Engineer",
    review:
      "This is an amazing service! Highly recommended. We provide many services, from tooth cleanings to dental implants, and cosmetic dentistry. Our services are designed to be budget-friendly, ensuring high-quality dental care is accessible and affordable.",
  },
  {
    username: "Jane Smith",
    userImage: dentist,
    profession: "Graphic Designer",
    review:
      "Outstanding service! The attention to detail is unparalleled. From creative consultations to design implementations, they ensure every aspect is covered. Their commitment to excellence is truly impressive.",
  },
  {
    username: "Emily Johnson",
    userImage: dentist,
    profession: "Marketing Manager",
    review:
      "Excellent experience! The team was very professional and provided top-notch marketing strategies tailored to our needs. Their expertise helped us achieve our goals and stand out in a competitive market.",
  },
  {
    username: "Michael Brown",
    userImage: dentist,
    profession: "Financial Advisor",
    review:
      "Exceptional service! They offer comprehensive financial planning with a personalized approach. Their advice has been invaluable in helping us navigate complex financial decisions and secure our future.",
  },
];

const Testimonial: React.FC = () => {
  return (
    <div>
      <Box className="flex justify-center">
        <Typography
          variant="h3"
          className="text-center border-[1px] border-digiRed rounded-lg p-3"
        >
          Testimonials
        </Typography>
      </Box>

      <div className="p-4">
        <Grid container>
          {testimonials.map((testimonial, index) => (
            <Grid item xs={12} md={6} key={index}>
              <TestimonialReview
                key={index}
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
