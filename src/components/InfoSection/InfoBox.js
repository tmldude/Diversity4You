import React from 'react'

import styles from "./InfoBox.module.css"

const InfoBox = (props) => {
  return (
    <section className={styles.box}>
      <h1>{props.name}</h1>
      <p>{props.text}</p>
    </section> 
    )
}

export default InfoBox