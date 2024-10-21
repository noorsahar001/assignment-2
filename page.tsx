import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
        <div className={styles.nav}>
          <h1 className={styles.h1}>Cool Coverage</h1>
          <a href="/" className={styles.link}>Home</a>
          <a href="/about" className={styles.link}>About</a>
          <a href="/services" className={styles.link}>Services</a>
          <a href="/contact" className={styles.link}>Contact</a>
        </div>

        <div className={styles.hero}>
          <h1 className={styles.heroh1}>Flawless Face, EveryTime</h1>
        </div>

        <div className={styles.cta}>
          <h1 className={styles.conth1}>Contact</h1>
          <form className={styles.form}>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <textarea placeholder="Message" />
            <button>Send</button>
          </form>
        </div>

        <div className={styles.footer}>
          <h1 className={styles.h1}>My Website</h1>
          <p className={styles.p}>Copyright 2023</p>
        </div>
    </div>
  );
}
