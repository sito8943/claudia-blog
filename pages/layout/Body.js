"use client";

// components
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

// styles
import styles from "../../styles/Home.module.css";

// views
import Home from "../views/Home";

const Body = () => (
  <main className={styles.main}>
    <Navbar />
    <Home />
    <Footer />
  </main>
);

export default Body;
