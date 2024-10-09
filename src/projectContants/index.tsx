import {
  cosmetic,
  dental_mplants,
  emergency_dentistry,
  prevention,
  root_canal_clinic,
  service_detail
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
      alt: "service87",
      title: "Dental Implants",
      desc: "A dental implant is an artificial tooth root that’s placed into your jaw to hold a prosthetic tooth or bridge.",
      navLink: "l"
    },
    {
      image: root_canal_clinic,
      alt: "service109",
      title: "Teeth Whitening",
      desc: "It's never been easier to brighten your smile at home. There are all kinds of products you can try.",
      navLink: "l"
    },
    {
      image: emergency_dentistry,
      alt: "service13",
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
  ],
  clinicServiceDetails: [
    {
      header: "Root Canal",
      desc: "Root canal treatment (endodontics) is a dental procedure used to treat infection at the centre of a tooth.",
      headerImage: root_canal_clinic,
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      asset: service_detail
    },
    {
      header: "Teeth Whitening",
      desc: "It's never been easier to brighten your smile at home. There are all kinds of products you can try.",
      headerImage: root_canal_clinic,
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      asset: service_detail
    },
    {
      header: "Dental Implants",
      desc: "A dental implant is an artificial tooth root that’s placed into your jaw to hold a prosthetic tooth or bridge.",
      headerImage: root_canal_clinic,
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      asset: service_detail
    },
    {
      header: "Prevention",
      desc: "Preventive dentistry is dental care that helps maintain good oral health. a combination of regular dental. ",
      headerImage: root_canal_clinic,
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      asset: service_detail
    }
  ],
  faqs: [
    {
      _id: "faq1",
      question: "What causes tooth sensitivity?",
      answer:
        "Tooth sensitivity can be caused by a variety of factors, including worn enamel, exposed tooth roots, cavities, gum disease, or recent dental procedures."
    },
    {
      _id: "faq2",
      question: "What can I do to prevent cavities?",
      answer:
        "To prevent cavities, practice good oral hygiene by brushing twice a day, flossing daily, using fluoride toothpaste, reducing sugary and acidic foods, and visiting your dentist regularly for check-ups."
    },
    {
      _id: "faq3",
      question: "Are dental X-rays safe?",
      answer:
        "Yes, dental X-rays are generally safe. They use a very low level of radiation, and protective measures such as lead aprons are used to minimize exposure. Dental X-rays are important for diagnosing issues that aren't visible during a regular dental exam."
    },
    {
      _id: "faq4",
      question: "What are the signs of gum disease?",
      answer:
        "Signs of gum disease include red, swollen, or bleeding gums, persistent bad breath, receding gums, loose teeth, and sensitivity. Early detection and treatment are important to prevent more serious issues."
    }
  ]
};
export default projectConstants;
