import React, { useMemo, useEffect, useState } from "react";

// contexts
import { useLanguage } from "../../../context/LanguageProvider";

// styles
import styles from "../../../styles/Hero.module.css";

const Hero = () => {
  const { languageState } = useLanguage();

  const [typewriter, setTypewriter] = useState(0);
  const [typing, setTyping] = useState(true);

  const heroText = useMemo(() => {
    return languageState.texts.Home.Hero;
  }, [languageState]);

  useEffect(() => {
    setTimeout(() => {
      if (heroText.Body[typewriter + 1]) setTypewriter(typewriter + 1);
      else setTypewriter(0);
      return clearTimeout(this);
    }, 6000);
  }, [typewriter, heroText]);

  useEffect(() => {
    setTyping(false);
    setTimeout(() => {
      setTyping(true);
    });
  }, [typewriter]);

  return (
    <div className="flex h-full w-full xs:p-mobil md:p-pc">
      <div className="flex flex-col items-start">
        <h1 className="font-h1 xs:text-h1-xs lg:text-h1-lg">
          {heroText.Title}
        </h1>
        <div style={{ width: `${heroText.Body[typewriter].length * 10}px` }}>
          {typing ? (
            <p className={`${styles.typewriter} border-orange`}>
              {heroText.Body[typewriter]}
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Hero;
