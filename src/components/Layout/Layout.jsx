import React from "react";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import Notification from "../Notification/Notification";
import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <ErrorBoundary>
      <div className={styles.app}>
        <Header />

        {children}

        <Notification />
        <Footer />
      </div>
    </ErrorBoundary>
  );
};

export default Layout;
