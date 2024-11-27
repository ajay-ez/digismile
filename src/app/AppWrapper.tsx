"use client";
import React, { ReactNode, Suspense } from "react";
import { Box, ChakraProvider } from "@chakra-ui/react";
import { CacheProvider } from "@chakra-ui/next-js";

import { Provider } from "react-redux";
import store from "@/redux/store";
import themes from "./themes";

export default function AppWrappers({ children }: { children: ReactNode }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Provider store={store}>
        <CacheProvider>
          <ChakraProvider theme={themes}>
            <Box className="container">{children}</Box>
          </ChakraProvider>
        </CacheProvider>
      </Provider>
    </Suspense>
  );
}
