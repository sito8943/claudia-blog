"use client";
import { useMemo, useState } from "react";
import { useRouter } from "next/router";

// components
import Link from "../Link/Link";

// @fortawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBars } from "@fortawesome/free-solid-svg-icons";

// styles
import styles from "../../../styles/Navbar.module.css";

// lang
import { useLanguage } from "../../../context/LanguageProvider";
import Drawer from "./Drawer/Drawer";

const Navbar = () => {
  const router = useRouter();

  const { languageState } = useLanguage();

  const navbarText = useMemo(() => {
    return languageState.texts.Navbar;
  }, [languageState]);

  const [showSearch, setShowSearch] = useState(false);
  const [showDrawer, setShowDrawer] = useState(false);

  return (
    <nav className={styles.navbar}>
      <Drawer visible={showDrawer} onClose={() => setShowDrawer(false)} />
      <div className={styles.left}>
        <button onClick={() => setShowDrawer(true)} className={styles.toggle}>
          <FontAwesomeIcon icon={faBars} />
        </button>
        <div className={`${styles.links} flex`}>
          {navbarText.Links.map((item) => (
            <Link
              className={`transition ease duration-150 hover:bg-red p-active rounded-20px ${
                router.asPath === `/${item.href}` ? "bg-orange" : ""
              }`}
              key={item.label}
              href={item.href}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      <div className={styles.right}>
        <button
          onClick={() => setShowSearch(true)}
          className="p-icon rounded-circle w-icon h-icon transition ease duration-150 hover:bg-red"
        >
          <FontAwesomeIcon icon={faSearch} />
        </button>
        <Link className={styles.contact} href="#contact">
          <button className="p-active rounded-20px transition ease duration-150 bg-orange hover:bg-red">
            {navbarText.CatchToAction}
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
