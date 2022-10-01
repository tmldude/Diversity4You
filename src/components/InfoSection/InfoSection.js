import React from "react";

import InfoBox from "./InfoBox";
import styles from "./InfoSection.module.css";

const data = [
  {
    name: "bob johnny",
    text: "I really like apples, apples are great and they fit everywhere.",
  },
  {
    name: "Sophia billy",
    text: "Sometimes when nobody is watching, I run into the woods and run some more",
  },
  {
    name: "Chick Baily",
    text: "There are 2 things I like about diversity. Div and ersity",
  },
  {
    name: "Teddy James",
    text: "We like trains and big cars and big trucks",
  },
  {
    name: "bob johnny",
    text: "I really like apples, apples are great and they fit everywhere.",
  },
  {
    name: "Sophia billy",
    text: "Sometimes when nobody is watching, I run into the woods and run some more",
  },
  {
    name: "Chick Baily",
    text: "There are 2 things I like about diversity. Div and ersity",
  },
  {
    name: "Teddy James",
    text: "We like trains and big cars and big trucks",
  },
  {
    name: "bob johnny",
    text: "I really like apples, apples are great and they fit everywhere.",
  },
  {
    name: "Sophia billy",
    text: "Sometimes when nobody is watching, I run into the woods and run some more",
  },
  {
    name: "Chick Baily",
    text: "There are 2 things I like about diversity. Div and ersity",
  },
  {
    name: "Teddy James",
    text: "We like trains and big cars and big trucks",
  },
  
];

const InfoSection = () => {
  return (
    <section className={styles.info_section}>
      {( data.map((slide) => (
        <InfoBox key={slide.name + Math.random().toString()} id={slide.name} name={slide.name} text={slide.text}/>
      )) )}
    </section>
  );
};

export default InfoSection;
