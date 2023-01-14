"use client";

import { useCallback, useMemo, useState } from "react";

// components
import Link from "../Link/Link";

// @fortawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";

// styles
import styles from "../../../styles/Navbar.module.css";

// lang
import { useLanguage } from "../../context/LanguageProvider";

const Navbar = () => {
  const { languageState } = useLanguage();

  const navbarText = useMemo(() => {
    return languageState.texts.Navbar;
  }, [languageState]);

  const [toSearch, setToSearch] = useState("");
  const handleSearch = (e) => setToSearch(e.target.value);

  const [showSearch, setShowSearch] = useState(false);

  const searching = useMemo(
    () => (showSearch && toSearch.length ? true : false),
    [toSearch, showSearch]
  );

  const expandSearch = () => setShowSearch(!showSearch);

  const clearSearch = () => setToSearch("");

  return (
    <nav className={styles.navbar}>
      <div className={`${styles.left} ${showSearch ? styles.expanded : ""}`}>
        <button className={styles.toggle}></button>
        <span>LOGO</span>
        <div
          className={`${styles.search} ${showSearch ? styles.expanded : ""} `}
        >
          <button
            onClick={expandSearch}
            className={styles.icon}
            style={{ background: !showSearch ? "aliceblue" : "" }}
          >
            <FontAwesomeIcon icon={faSearch} />
          </button>
          <input
            type="search"
            value={toSearch}
            onChange={handleSearch}
            className={!showSearch ? styles.collapse : styles.expanded}
            placeholder={navbarText.Search.placeholder}
          />
          {searching ? (
            <button onClick={clearSearch} className={styles.cancel} style={{}}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
          ) : null}
        </div>
      </div>
      <div className={styles.right}>
        <div className={`${styles.links} ${showSearch ? styles.closed : ""}`}>
          {navbarText.Links.map((item) => (
            <Link className={styles.link} key={item.label} href={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
        <Link href="#contact-us">
          <button className={styles.catch}>{navbarText.CatchToAction}</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
