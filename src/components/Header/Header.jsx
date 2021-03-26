import React from "react";
import { Link } from "react-router-dom";

import styles from "./Header.module.css";
import rhino from "./logo.png";

const Header = () => {
  return (
    <header>
      <Link to="/" className={styles.logo}>
        <img src={rhino} width="40" alt="logo" />
        <span>Nevernote</span>
      </Link>
    </header>
  );
};

export default Header;
