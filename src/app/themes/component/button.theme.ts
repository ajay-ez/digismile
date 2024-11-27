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
      bgColor: "brand.100",
      color: "white",
      fontWeight: "500",
      borderRadius: "md",
      fontSize: "md",
      width: "350px",
      _hover: {
        _disabled: {
          bg: "brand.200"
        }
      }
    },
    "brand-second": {
      bgColor: "white",
      color: "brand.100",
      fontWeight: "500",
      borderRadius: "md",
      fontSize: "md",
      width: "350px",
      _hover: {
        _disabled: {
          bg: "brand.200"
        }
      }
    },
    header: {
      color: "white",
      fontSize: "sm",
      fontWeight: "800",
      padding: "0"
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
