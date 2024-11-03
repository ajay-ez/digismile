// components/Testimonial.tsx
import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import Image, { StaticImageData } from "next/image";

interface TestimonialProps {
  username: string;
  userImage: StaticImageData;
  profession: string;
  review: string;
}

const TestimonialReview: React.FC<TestimonialProps> = ({
  username,
  userImage,
  profession,
  review
}) => {
  return (
    <Card className="max-w-md mx-auto mb-4 shadow-lg rounded-2xl p-4 h-[350px]">
      <CardContent>
        <Box className="flex items-center">
          <Image
            src={userImage}
            alt={username}
            className="w-16 h-16 mr-4 rounded-full"
          />
          <Box>
            <Typography
              variant="subtitle1"
              component="div"
              className="font-atkinson"
            >
              {username}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              className="font-atkinson"
            >
              {profession}
            </Typography>
          </Box>
        </Box>
        <div>
          <Typography variant="body1" className="mt-2 font-atkinson ">
            {review}
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialReview;
