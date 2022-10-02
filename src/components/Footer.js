import React from "react";
import styles from "./Footer.module.css";
import Input from "./Input";

const Footer = () => {
  return (
    <section className={styles.footer_section}>
      <div className={styles.about_box}>
        <h1 className={styles.about_box_h1}>About Diversity4You</h1>
        <p className={styles.about_box_text}>
          The internet can be a disconnecting place. We want to bring people
          together through anecdotes. Come back for daily stories abut real
          people's traditions, cultures, and stories!
        </p>
      </div>
      <Input/>
    </section>
  );
};

export default Footer;
