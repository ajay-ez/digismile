export default {
  baseStyle: {
    borderRadius: "sm",
    boxShadow: "45px 76px 113px 7px rgba(112, 144, 176, 0.08)",
    transition: ".25s all ease",
    boxSizing: "border-box",
    backgroundColor: "transparent !important",
    _focus: {
      boxShadow: "none"
    },
    _active: {
      boxShadow: "none"
    }
  },
  variants: {
    default_color: {
      borderRadius: "sm",
      boxShadow: "45px 76px 113px 7px rgba(112, 144, 176, 0.08)",
      transition: ".25s all ease",
      boxSizing: "border-box",
      bgColor: "brand.200",
      color: "white.900",
      _focus: {
        boxShadow: "none"
      },
      _active: {
        boxShadow: "none"
      },
      _hover: {
        background: "brand.200"
      }
    },
    default: {
      borderRadius: "sm",
      boxShadow: "45px 76px 113px 7px rgba(112, 144, 176, 0.08)",
      transition: ".25s all ease",
      boxSizing: "border-box",
      bgColor: "gray.400",
      color: "black.900",
      _focus: {
        boxShadow: "none"
      },
      _active: {
        boxShadow: "none"
      },
      _hover: {
        background: "gray.400"
      }
    },
    brand: {
      bgColor: {
        base: "white.800",
        responsive: "brand.100"
      },
      color: {
        base: "brand.100",
        responsive: "white.800"
      },
      fontWeight: "800",
      borderRadius: "md",
      fontSize: "md",
      width: {
        base: "100%",
        responsive: "350px"
      },
      _hover: {
        _disabled: {
          bg: "brand.200"
        }
      }
    },
    "brand-second": {
      // bgColor: "white",
      // color: "brand.100",
      bgColor: {
        base: "transparent",
        responsive: "white.800"
      },
      color: {
        base: "white.100",
        responsive: "brand.100"
      },
      border: "1px white solid",
      fontWeight: "800",
      borderRadius: "md",
      fontSize: "md",
      width: {
        base: "100%",
        responsive: "350px"
      },
      _hover: {
        _disabled: {
          bg: "brand.200"
        }
      }
    },
    header: {
      fontSize: "sm",
      fontWeight: "800",
      padding: "0"
    },
    'reviews-button': {
      fontSize: "sm",
      fontWeight: "800",
      padding: "0",
    },
    appointment: {
      backgroundColor: "brand.100",
      color: "white",
      fontSize: "sm",
      fontWeight: "800",
      borderRadius: "md",
      padding: "1rem 1.5rem"
    }
  },
  sizes: {}
};
