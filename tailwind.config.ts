import type { Config } from "tailwindcss";
import colors from "./src/theme/colors";
import screens from "./src/theme/screen";
import fontFamily from "./src/theme/fontFamily";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      boxShadow: {
        "signup-shadow": "0px 4px 4px 0px #000",
        "service-shadow": "0px 12px 4px 0px #00000040",
        "schedule-shadow": "0px 8px 4px 0px #00000040",
        "appointment-card": "0px 10px 12px 0px #0096FFBF"
      },
      backgroundImage: {
        "orange-gradient": "linear-gradient(to right, #ff7e5f, #feb47b)",
        "blue-white-gradient":
          "linear-gradient(180deg, #FFFFFF 18.6%, #E6F6FE 35.1%)",
        "footer-blue-gradient": "linear-gradient(90deg, #004aad, #5de0e6)",
        "comprehensive-gradient": "linear-gradient(90deg, #cdffd8, #94b9ff)",
        "signup-gradient":
          "linear-gradient(90deg, #B2DAE5 5.72%, #63797F 100%)",
        "signup-child-gradient":
          "linear-gradient(290.61deg, #B2DAE5 2.03%, #A4D6E3 98.12%",
        "schedule-gradient":
          "linear-gradient(120.75deg, rgba(154, 184, 198, 0) 1.62%, #C5ECFF 88.27%)",
        "schedule-home-gradient":
          "linear-gradient(120.75deg, rgba(154, 184, 198, 0) 0.19%, #C5ECFF 86.84%)"
      },
      colors,
      screens,
      fontFamily
    }
  },
  plugins: []
};
export default config;
