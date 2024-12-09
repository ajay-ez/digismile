import React from "react";
import DigiLayout from "@/components/Layout";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Divider,
  Flex,
  Text
} from "@chakra-ui/react";
import { clinicServices } from "@/utils";

const ClinicServices = () => {
  const items = [
    { value: "a", title: "First Item", text: "Some value 1..." },
    { value: "b", title: "Second Item", text: "Some value 2..." },
    { value: "c", title: "Third Item", text: "Some value 3..." }
  ];

  return (
    <DigiLayout>
      <Box height={"60vh"} width={"100%"} className="locations-bg-image"></Box>
      <Flex
        className="home-section location-section"
        flexDir={"column"}
        gap={10}
        color={"brand.100"}
      >
        <Flex
          flexDir={"column"}
          className="responsive-services-section"
          justifyContent={"center"}
          width={"100%"}
        >
          <Text
            color={"brand.100"}
            className="heading"
            textAlign={"center"}
            fontWeight={100}
          >
            Your teeth
          </Text>
          <Text mt={2} as={"h4"} textAlign={"center"}>
            Experience innovative, gentle treatments that will leave you
            smiling.
          </Text>
          <Flex
            mt={8}
            borderRadius={"md"}
            style={{ borderCollapse: "collapse" }}
            border={"1px #963f36 solid"}
            justifyContent={"space-between"}
          >
            {clinicServices.map((service, index) => (
              <Flex
                key={index}
                flexDir={"column"}
                width={"100%"}
                borderRight={"1px #963f36 solid"}
              >
                <Text
                  borderBottom={"1px #963f36 solid"}
                  as={"h3"}
                  p={4}
                  color={"brand.100"}
                  fontWeight={700}
                  textAlign={"center"}
                  height={"100px"}
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                >
                  {service.heading}
                </Text>
                <Flex
                  p={8}
                  justifyContent={"center"}
                  textAlign={"center"}
                  flexDir={"column"}
                >
                  <Text as={"h5"} fontWeight={500}>
                    {service.description}
                  </Text>
                  <Text as={"h4"} fontWeight={600} mt={16} color={"brand.100"}>
                    {service.time}
                  </Text>
                  <Text as={"h4"} mt={2}>
                    {service.price}
                  </Text>
                  <Button
                    mt={4}
                    backgroundColor={"brand.100"}
                    color={"white"}
                    borderRadius={"md"}
                  >
                    BOOK NOW
                  </Button>
                </Flex>
              </Flex>
            ))}
          </Flex>
        </Flex>
        <Flex
          flexDir={"column"}
          className="responsive-services-section"
          justifyContent={"center"}
          width={"100%"}
        >
          <Text className="heading" textAlign={"center"} fontWeight={800}>
            General Dentistry Services
          </Text>
          <Text as={"h3"} textAlign={"center"} mt={2}>
            one stop shop for all your needs one stop shop for all your needs
          </Text>
          <Flex mt={20} gap={10} flexDir={"column"}>
            <Flex
              gap={10}
              justifyContent={"space-between"}
              borderBottom={"1px #963f36 solid"}
            >
              <Box width={"100%"}>
                <Text as={"h1"} textAlign={"center"} fontWeight={800}>
                  General Dentistry Services
                </Text>
              </Box>
              <Flex width={"100%"} flexDir={"column"}>
                <Text as={"h4"} fontWeight={800}>
                  Maintain Excellent Oral Health with our General Dentistry
                  Services
                </Text>
                <Text as={"h4"} mt={6}>
                  A comprehensive exam and cleaning are essential for
                  maintaining optimal dental health. Our experienced dental
                  professionals provide thorough examinations and gentle
                  cleanings, tailored to your unique needs. We emphasize patient
                  education and personalized care, empowering you to take
                  control of your dental health.
                </Text>
                <Text as={"h4"} fontWeight={800} mt={6}>
                  Maintain Excellent Oral Health with our General Dentistry
                  Services
                </Text>
                <Text as={"h4"} mt={6}>
                  A comprehensive exam and cleaning are essential for
                  maintaining optimal dental health. Our experienced dental
                  professionals provide thorough examinations and gentle
                  cleanings, tailored to your unique needs. We emphasize patient
                  education and personalized care, empowering you to take
                  control of your dental health.
                </Text>
                <Divider mt={8} mb={4} />
                <Accordion allowToggle variant={"services"}>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          Section 1 title
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          Section 2 title
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </Flex>
            </Flex>
            <Flex gap={10} justifyContent={"space-between"}>
              <Box width={"100%"}>
                <Text as={"h1"} textAlign={"center"} fontWeight={800}>
                  General Dentistry Services
                </Text>
              </Box>
              <Flex width={"100%"} flexDir={"column"}>
                <Text as={"h4"} fontWeight={800}>
                  Maintain Excellent Oral Health with our General Dentistry
                  Services
                </Text>
                <Text as={"h4"} mt={6}>
                  A comprehensive exam and cleaning are essential for
                  maintaining optimal dental health. Our experienced dental
                  professionals provide thorough examinations and gentle
                  cleanings, tailored to your unique needs. We emphasize patient
                  education and personalized care, empowering you to take
                  control of your dental health.
                </Text>
                <Text as={"h4"} fontWeight={800} mt={6}>
                  Maintain Excellent Oral Health with our General Dentistry
                  Services
                </Text>
                <Text as={"h4"} mt={6}>
                  A comprehensive exam and cleaning are essential for
                  maintaining optimal dental health. Our experienced dental
                  professionals provide thorough examinations and gentle
                  cleanings, tailored to your unique needs. We emphasize patient
                  education and personalized care, empowering you to take
                  control of your dental health.
                </Text>
                <Divider mt={8} mb={4} />
                <Accordion allowToggle variant={"services"}>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          Section 1 title
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          Section 2 title
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </DigiLayout>
  );
};

export default ClinicServices;
