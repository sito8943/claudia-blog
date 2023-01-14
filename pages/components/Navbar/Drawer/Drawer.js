import React, { useMemo, useCallback, useEffect } from "react";

// @fortawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

// components
import Link from "../../Link/Link";

// styles
import styles from "../../../../styles/Drawer.module.css";

// contexts
import { useLanguage } from "../../../context/LanguageProvider";

const Drawer = ({ visible, onClose }) => {
  const { languageState } = useLanguage();

  const navbarText = useMemo(() => {
    return languageState.texts.Navbar;
  }, [languageState]);

  const onResize = useCallback(() => {
    if (window.innerWidth > 800) onClose();
  }, [onClose]);

  useEffect(() => {
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, [onResize]);

  return (
    <div className={`${styles.container} ${!visible ? styles.off : ""}`}>
      <div className={`${styles.drawer} ${!visible ? styles.close : ""}`}>
        <button onClick={onClose} className={styles.button}>
          <FontAwesomeIcon icon={faTimes} />
        </button>

        {navbarText.Links.map((item) => (
          <Link className={styles.link} key={item.label} href={item.href}>
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Drawer;
