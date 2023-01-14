"use client";

import { useMemo } from "react";

// styles
import styles from "../../../styles/Navbar.module.css";

// lang
import { useLanguage } from "../../context/LanguageProvider";
import Link from "../Link/Link";

const Navbar = () => {
  const { languageState } = useLanguage();

  const navbarText = useMemo(() => {
    return languageState.texts.Navbar;
  }, [languageState]);

  return (
    <nav className={styles.navbar}>
      <div className={styles.left}>
        <button>
          
        </button>
        <span>LOGO</span>
        <div className={styles.search}>
          <i className="search-icon fa-sharp fa-solid fa-magnifying-glass"></i>
          <input placeholder={navbarText.Search.placeholder} />
        </div>
      </div>
      <div className={styles.right}>
        {navbarText.Links.map((item) => (
          <Link key={item.label} href={item.href}>
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
