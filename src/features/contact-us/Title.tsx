import React from "react";
import { TextImageOverlay } from "@/components/common/TextImageOverlay";
import { Stack } from "@chakra-ui/react";

export const Title = () => {
  return (
    <>
      <TextImageOverlay title="Contact Us" />
      <Stack
        justifyContent="center"
        direction="row"
        className="flex flex-col md:flex-row items-center p-8 gap-16"
      >
        <div>
          <h1 className="text-4xl">
            Call Us Now
          </h1>
          <h1 className="text-2xl">
            We are available at two locations
          </h1>
        </div>
        <div>
          <h1 className="text-2xl">
            Burke VA
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(571)
            374-8000
          </h1>
          <h1 className="text-2xl">
            Washington D.C &nbsp;(202) 545-6336
          </h1>
        </div>
      </Stack>
    </>
  );
};

export default Title;
