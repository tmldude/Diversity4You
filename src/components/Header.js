import React from 'react'
import styles from "./Header.module.css"

const Header = () => {
  return (
    <section className={styles.header_box}>
        <div className={styles.header_title}>
            <h1 className={styles.header_header}>
                Diversity 4 You
            </h1>
            <p className={styles.header_text}>One day you will wake up to nothing.
           </p>
        </div>
    </section>
  )
}

export default Header