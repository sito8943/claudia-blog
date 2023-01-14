"use client";

// components
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

// styles
import styles from "../../styles/Home.module.css";

const Body = () => (
  <main className={styles.main}>
    <Navbar />
    <Footer />
  </main>
);

export default Body;
