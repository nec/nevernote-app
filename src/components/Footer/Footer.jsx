import React from "react";

import styles from "./Footer.module.css";

const Footer = () => {
  const date = new Date().toLocaleDateString("ru-RU", { year: "numeric" });
  return (
    <footer className={styles.footer}>
      {date} &copy; Nevernote&trade; All rights reserved&reg;
    </footer>
  );
};

export default Footer;
