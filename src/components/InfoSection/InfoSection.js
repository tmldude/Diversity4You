import React from "react";

import InfoBox from "./InfoBox";
import styles from "./InfoSection.module.css";
import image from "../../assets/man.jpg";

const data = [
  {
    name: "bob johnny",
    text: "I really like apples, apples are great and they fit everywhere.",
    image: image,
    handle: "@newpetordershopboys",
    link: "https://www.google.com",
  },
  {
    name: "Sophia billy",
    text: "Sometimes when nobody is watching, I run into the woods and run some more",
    image: image,
    handle: "@newpetordershopboys",
    link: "https://www.google.com",
  },
  {
    name: "Chick Baily",
    text: "There are 2 things I like about diversity. Div and ersity",
    image: image,
    handle: "@newpetordershopboys",
    link: "https://www.google.com",
  },
  {
    name: "Teddy James",
    text: "We like trains and big cars and big trucks",
    image: image,
    handle: "@newpetordershopboys",
    link: "https://www.google.com",
  },
  {
    name: "bob johnny",
    text: "I really like apples, apples are great and they fit everywhere. I really like apples, apples are great and they fit everywhere.I really like apples, apples are great and they fit everywhere.I really like apples, apples are great and they fit everywhere.I really like apples, apples are great and they fit everywhere.I really like apples, apples are great and they fit everywhere.I really like apples, apples are great and they fit everywhere.",
    image: image,
    handle: "@newpetordershopboys",
    link: "https://www.google.com",
  },
  {
    name: "Sophia billy",
    text: "Sometimes when nobody is watching, I run into the woods and run some more",
    image: image,
    handle: "@newpetordershopboys",
    link: "https://www.google.com",
  },
  {
    name: "Chick Baily",
    text: "There are 2 things I like about diversity. Div and ersity",
    image: image,
    handle: "@newpetordershopboys",
    link: "https://www.google.com",
  },
  {
    name: "Teddy James",
    text: "We like trains and big cars and big trucks",
    image: image,
    handle: "@newpetordershopboys",
    link: "https://www.google.com",
  },
  {
    name: "bob johnny",
    text: "I really like apples, apples are great and they fit everywhere.",
    image: image,
    handle: "@newpetordershopboys",
    link: "https://www.google.com",
  },
  {
    name: "Sophia billy",
    text: "Sometimes when nobody is watching, I run into the woods and run some more",
    image: image,
    handle: "@newpetordershopboys",
    link: "https://www.google.com",
  },
  {
    name: "Chick Baily",
    text: "There are 2 things I like about diversity. Div and ersity",
    image: image,
    handle: "@newpetordershopboys",
    link: "https://www.google.com",
  },
  {
    name: "Teddy James",
    text: "We like trains and big cars and big trucks",
    image: image,
    handle: "@newpetordershopboys",
    link: "https://www.google.com",
  },
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
