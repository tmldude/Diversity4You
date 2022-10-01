import React from 'react'
import styles from "./Header.module.css"

const Header = () => {
  return (
    <section className={styles.header_box}>
        <div className={styles.header_title}>
            <h1>
                Diversity 4 You
            </h1>
            <p>Read real stories from real people </p>
        </div>
    </section>
  )
}

export default Header