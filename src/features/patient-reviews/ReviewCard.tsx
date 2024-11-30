import { Swiper, SwiperSlide } from "swiper/react";
import "./patient-reviews.scss";
import { Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import { logo } from "@/assets/images";
import { motion } from "framer-motion";

const ReviewCard = () => {
  const testimonials = [
    {
      text: "The team at this dental clinic is absolutely incredible! I came in for a root canal and was honestly a bit nervous, but they explained everything thoroughly and made me feel at ease. The process was painless, and the results were outstanding. Their professionalism and care really stood out. ",
      name: "Michael Brown",
      profession: "Teacher",
      image: logo
    },
    {
      text: "I couldn’t be happier with the teeth whitening service! My teeth are brighter, and I’ve been getting compliments on my smile ever since. The clinic is spotless, and the staff are so welcoming. I loved how easy it was to book through their app. It's refreshing to find a place that combines technology with excellent service.",
      name: "Sarah Lee",
      profession: "Graphic Designer",
      image: logo
    },
    {
      text: "I went in for an exam and cleaning, and I was so impressed with the attention to detail. The dentist was thorough, kind, and explained everything in a way that made sense. It’s rare to find a place where you feel genuinely cared for. I’ll definitely return for all my dental needs!",
      name: "Rajesh Kumar",
      profession: "Software Engineer",
      image: logo
    },
    {
      text: "The orthodontic services here are top-notch. After two years of braces, I now have the perfect smile, and it’s all thanks to this amazing team. They were with me every step of the way, ensuring I was comfortable and informed. I couldn’t be more grateful. The results are truly life-changing!",
      name: "Emily Carter",
      profession: "Student",
      image: logo
    },
    {
      text: "I recently got a set of dentures here, and the experience was fantastic. The dentist took the time to ensure they fit perfectly and even gave me tips on how to care for them. It’s clear they prioritize their patients' comfort and satisfaction. I’m beyond grateful for their exceptional care and professionalism.",
      name: "Thomas Mitchell",
      profession: "Retiree",
      image: logo
    }
  ];

  return (
    <Swiper
      slidesPerView={"auto"}
      centeredSlides={true}
      spaceBetween={30}
      loop={true}
      pagination={{
        clickable: true
      }}
      breakpoints={{
        640: {
          slidesPerView: 1
        },
        768: {
          slidesPerView: 2
        },
        1024: {
          slidesPerView: 3
        }
      }}
    >
      {testimonials.map((testimonial, index) => (
        <SwiperSlide key={index}>
          <Image
            className="slide-image"
            src={testimonial.image}
            alt=""
            style={{
              height: "120px",
              width: "120px"
            }}
          ></Image>
          <Flex className="slide-text" flexDir={"column"}>
            <Text as={"h5"}>{testimonial.text}</Text>
            <Text as={"h4"} mt={4} fontWeight={900}>
              {testimonial.name}
            </Text>
            <Text as={"h6"}>{testimonial.profession}</Text>
          </Flex>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ReviewCard;
