/**
 * © IEEE CS Kerala Chapter 2024. All rights reserved.
 *
 * This code is the property of IEEE CS Kerala Chapter and is protected by copyright law.
 * Unauthorized use, reproduction, or distribution is strictly prohibited.
 *
 * @author Janajith D
 */

export const constants = {
  REGISTER_LINK:
    "https://docs.google.com/forms/d/e/1FAIpQLScI-AVHHHH6M4Md5K87uQKVlHJTmmH_fLoomGnyGSf-zAVTbQ/viewform?usp=sf_link",
};

export const imageAlts = {
  LOGO: "Colloquium Logo",
  CSKS_LOGO: "IEEE Computer Society Kerala Chapter",
  VENUE: "Park Centre, Technopark",
};

export const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Schedule", href: "/schedule" },
  { name: "Speakers", href: "/#speakers" },
  // { name: "Sponsors", href: "#" },
  { name: "Contact", href: "/contact" },
];

export const aboutUs = [
  {
    id: 1,
    title: "About COLLOQUIUM",
    desc: "COLLOQUIUM, hosted annually by the IEEE Computer Society Kerala Chapter (CSKS), is a premier networking and knowledge-sharing event. Designed for IEEE and non-IEEE professionals, COLLOQUIUM provides a unique platform for sharing insights, staying updated on industry trends, and fostering interactions among professionals from diverse technological domains.Each edition focuses on a specific theme, and COLLOQUIUM'24 will highlight the pivotal field of Cloud Computing. Join us at this vibrant event to delve into the latest advancements, connect with experts, and explore the future of technology. Don't miss the opportunity to be part of the dynamic discussions and collaborative sessions that define COLLOQUIUM!",
    img: "/images/logos/colloquium/black.png",
    reverse: false,
  },
  {
    id: 2,
    title: "About COLLOQUIUM'23",
    desc: `COLLOQUIUM'23, held on February 25th, 2023, will be centered around Cybersecurity. The event featured technical talks by experts, including Ms. Anita Nair on "An Introduction to Secure Architecture," Dr. Vinod P. on "Malware Detection: A Machine Learning Based Perspective," and Dr. Dittin Andrews on "Recent Trends in Cybersecurity." The day also included a panel discussion on "Incident Response Plan for Working Professionals'' with active participation from attendees.The event successfully achieved its goal of disseminating information, enhancing understanding, and fostering collaboration in the field of Cybersecurity. The positive feedback from participants solidified COLLOQUIUM'23 as a memorable and valuable experience.`,
    img: "/images/logos/colloquium/black23.png",
    reverse: true,
  },
  {
    id: 3,
    title: "About IEEE",
    desc: "IEEE, the largest technical professional organization globally, is committed to advancing technology for the betterment of humanity. Through its highly regarded publications, conferences, technology standards, and a wide range of professional and educational activities, IEEE and its members inspire a global community. By providing a platform for collaboration, IEEE empowers professionals to make significant contributions to society and create positive impacts on a global scale.",
    img: "/images/logos/ieee/IEEE_black.png",
    reverse: false,
  },
  {
    id: 4,
    title: "About IEEE CS",
    desc: "	The IEEE Computer Society (CS) is at the forefront of empowering and advancing professionals in the field of Computer Science and Engineering, driving global technological progress. By fostering active participation and collaboration among computer engineers, scientists, academia, and industry experts, IEEE CS establishes a benchmark for education and engagement. Through its conferences, publications, and diverse programs, the society creates",
    img: "/images/logos/cs/IEEE-CS_LogoTM-black.png",
    reverse: true,
  },
] as const;
