export default {
  body: {
    overflowX: "hidden",
    bg: "white.800",
    // color: "white",
    fontFamily: "DM Sans",
    letterSpacing: "-0.5px"
  },
  html: {
    fontFamily: "DM Sans"
  },
  input: {
    color: "gray.700"
  },
  option: {
    color: "black"
  },
  ".container": {
    height: "100vh",
    width: "100vw",
    maxHeight: "100vh",
    maxWidth: "100vw",
    overflow: "auto"
  },
  ".scroll": {
    "::-webkit-scrollbar": {
      height: 1.5,
      width: 1.5
    },
    "::-webkit-scrollbar-track": {
      bgColor: "transparent"
    },
    "::-webkit-scrollbar-thumb": {
      bgColor: "#d9d9d9",
      borderRadius: "8px"
    },
    "::-webkit-scrollbar-corner": {},
    "::-webkit-scrollbar-thumb:hover": {
  background: "#d9d9d9"
}
  }
};
