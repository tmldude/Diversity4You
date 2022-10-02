import React from "react";

import InfoBox from "./InfoBox";
import styles from "./InfoSection.module.css";
// import image from "../../assets/man.jpg";
import image1 from "../../assets/img1.jpg";
import image2 from "../../assets/img2.jpg";
import image3 from "../../assets/img3.jpg";
import image4 from "../../assets/img4.jpg";
import image5 from "../../assets/img5.jpg";

const data = [
  {
    name: "Diversity Mark",
    text: "Being diverse and inclusive emphasises to employees that their mental health and wellbeing is priority. It also reiterates to the employee that you will be treated fairly regardless of colour, age, gender or disability.",
    image: image1,
    handle: "@Diversity_Mark",
    link: "https://twitter.com/diversity_mark?lang=en",
  },
  {
    name: "Sophia billy",
    text: "To be open to experiencing new #cultures is to be open to new ways of #thinking. It's a by-product of #living as an #expatriate #ESL #teacher. #multiculture #Diversity #LiteraturePosts #lifestyle #education #school #literacy #Literature #art #teaching",
    image: image2,
    handle: "@gottfriedschmer",
    link: "https://twitter.com/gottfriedschmer",
  },
  {
    name: "Crown & Champa Resorts",
    text: "Today is #WorldHeritageDay, a unique celebration that encourages us to honour the world's #cultures, raise awareness of the importance of the #diversity of cultural #heritage and preserve it for our present generation and those to come.",
    image: image3,
    handle: "@ccr_maldives",
    link: "https://twitter.com/ccr_maldives",
  },
  {
    name: "Lassina Zerbo",
    text: "Today’s World Day for Cultural #Diversity for #Dialogue & #Development is a reminder to harness the diverse richness amongst us and bridge the gaps between #cultures for a more peaceful & #secure . #WorldDiversityDay",
    image: image4,
    handle: "@SinaZerbo",
    link: "https://twitter.com/SinaZerbo",
  },
  {
    name: "Galerie MALABO",
    text: "Embrace your #cultures build #bridges not #walls don't fear the unknown, have lunch with your neighbor, be adventurous, get out of your comfort zone embrace #Diversity",
    image: image5,
    handle: "@MALABOArts",
    link: "https://twitter.com/MALABOArts",
  },
  // {
  //   name: "Sophia billy",
  //   text: "Sometimes when nobody is watching, I run into the woods and run some more",
  //   image: image,
  //   handle: "@newpetordershopboys",
  //   link: "https://www.google.com",
  // },
];

const InfoSection = () => {
  return (
    <section className={styles.info_section}>
      {data.map((slide) => (
        <InfoBox
          key={slide.name + Math.random().toString()}
          id={slide.name}
          name={slide.name}
          text={slide.text}
          image={slide.image}
          twitterAt={slide.handle}
          link={slide.link}
        />
      ))}
    </section>
  );
};

export default InfoSection;
