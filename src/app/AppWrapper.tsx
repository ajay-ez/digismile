"use client";

import React, { ReactNode } from "react";
import { Box, ChakraProvider } from "@chakra-ui/react";
import { CacheProvider } from "@chakra-ui/next-js";

import { useDispatch } from "react-redux";
import themes from "./themes";
import { toggleHeader } from "@/redux/SharedSlice";

export default function AppWrappers({ children }: { children: ReactNode }) {
  const dispatch = useDispatch();

  const handleScroll = (e: any) => {
    if (e.target.scrollTop > 50) {
      dispatch(toggleHeader(true));
    } else {
      dispatch(toggleHeader(false));
    }
  };

  return (
    <CacheProvider>
      <ChakraProvider theme={themes}>
        <Box onScroll={(e) => handleScroll(e)} className="container scroll">
          {children}
        </Box>
      </ChakraProvider>
    </CacheProvider>
  );
}
