import React, { useEffect, useState } from "react";
import styles from "./scrollButton.module.scss";

export const ScrollButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    if (window.pageYOffset > 10) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll");
  }, []);

  return (
    <div>
      {isVisible && (
        <button
          id="scrollBtn"
          onClick={scrollToTop}
          className={styles.scrollBtn}
        >
          ^
        </button>
      )}
    </div>
  );
};
