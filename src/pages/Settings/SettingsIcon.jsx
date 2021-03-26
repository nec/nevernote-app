import React from "react";
import { Link } from "react-router-dom";

import icogear from "./ico-gear.svg";

import styles from "./Settings.module.css";

function SettingsIcon() {
  return (
    <Link to="/settings" className={styles.settingsEntry}>
      <img src={icogear} width="20" alt="settings icon" />
      settings
    </Link>
  );
}

export default SettingsIcon;
