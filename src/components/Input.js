import React, { useState } from "react";
import styles from "./Input.module.css";

import { Axios, db } from './config'

// const functions = require("firebase-functions");

const Input = () => {
  const [formData, setFormData] = useState({});

  const updateInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    sendEmail();
    setFormData({
      name: "",
      email: "",
      story: "",
    });
  };
  const sendEmail = () => {
    Axios.post(
      "https://diversity4you-e9599.web.app/",
      formData
    )
      .then((res) => {
        db.collection("emails").add({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          time: new Date(),
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className={styles.submit_story_box}>
      <h1 className={styles.input_h1}>Submit a Story</h1>
      <form onSubmit={handleSubmit}>
        <label className={styles.input_label}>
          Name
          <input
            onChange={updateInput}
            type="text"
            name="name"
            placeholder="Name"
            className={styles.input_text}
            value={formData.name || ""}
          />
        </label>
        <label className={styles.input_label}>
          Email
          <input
            name="email"
            placeholder="Email"
            onChange={updateInput}
            value={formData.email || ""}
            className={styles.input_text}
          />
        </label>
        <label className={styles.input_label}>
          Story
          <input
            type="text"
            name="story"
            placeholder="Story"
            onChange={updateInput}
            value={formData.story || ""}
            className={styles.input_message}
          />
        </label>
        <button className={styles.input_button}>submit</button>
      </form>
    </div>
  );
};

export default Input;
