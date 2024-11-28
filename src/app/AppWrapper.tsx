"use client";
import React, { ReactNode, Suspense } from "react";
import { Box, ChakraProvider } from "@chakra-ui/react";
import { CacheProvider } from "@chakra-ui/next-js";

import { Provider } from "react-redux";
import store from "@/redux/store";
import themes from "./themes";

export default function AppWrappers({ children }: { children: ReactNode }) {
  const handleScroll = (e: any) => {
    if (e.target.scrollTop > 50) {
      document.getElementById("header")?.classList.add("sticky-header");
    } else {
      document.getElementById("header")?.classList.remove("sticky-header");
    }
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Provider store={store}>
        <CacheProvider>
          <ChakraProvider theme={themes}>
            <Box onScroll={(e) => handleScroll(e)} className="container">
              {children}
            </Box>
          </ChakraProvider>
        </CacheProvider>
      </Provider>
    </Suspense>
  );
}
