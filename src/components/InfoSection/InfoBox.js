import React from "react";

import styles from "./InfoBox.module.css";

const InfoBox = (props) => {
  return (
    <div className={styles.box}>
      <img className={styles.box_image} alt="man" src={props.image}></img>
      <h1 className={styles.box_name}>{props.name}</h1>
      <p className={styles.box_text}>{props.text}</p>
    </div>
  );
};

export default InfoBox;
