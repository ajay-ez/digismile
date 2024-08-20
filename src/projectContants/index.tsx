import {
  cosmetic,
  dental_mplants,
  emergency_dentistry,
  prevention,
  root_canal_clinic
} from "@/assets/images";
const projectConstants = {
  clinicService: [
    {
      image: root_canal_clinic,
      alt: "service1",
      title: "Root Canal Treatment",
      desc: "Root canal treatment (endodontics) is a dental procedure used to treat infection at the centre of a tooth.",
      navLink: "l"
    },
    {
      image: cosmetic,
      alt: "service2",
      title: "Cosmetic Dentist",
      desc: "Cosmetic dentistry is the branch of dentistry that focuses on improving the appearance of your smile.",
      navLink: "l"
    },
    {
      image: dental_mplants,
      alt: "service1",
      title: "Dental Implants",
      desc: "A dental implant is an artificial tooth root that’s placed into your jaw to hold a prosthetic tooth or bridge.",
      navLink: "l"
    },
    {
      image: root_canal_clinic,
      alt: "service1",
      title: "Teeth Whitening",
      desc: "It's never been easier to brighten your smile at home. There are all kinds of products you can try.",
      navLink: "l"
    },
    {
      image: emergency_dentistry,
      alt: "service1",
      title: "Emergency Dentistry",
      desc: "In general, any dental problem that needs immediate treatment to stop bleeding, alleviate severe pain.",
      navLink: "l"
    },
    {
      image: prevention,
      alt: "Prevention",
      title: "Prevention",
      desc: "Preventive dentistry is dental care that helps maintain good oral health. a combination of regular dental.",
      navLink: "l"
    }
  ]
};
export default projectConstants;
