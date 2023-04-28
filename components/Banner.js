import React, { useState, useEffect } from 'react';
import styles from './banner.module.css';

function Banner(props) {
  const [count, setCount] = useState(props.count || 1);
  const titles = [...Array(count)].map((_, index) => props.title);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      let newCount = 1;
      if (width < 440) {
        newCount = 1;
      } else if (width >= 768 && width < 1024) {
        newCount = 2;
      } else if (width >= 1024 && width < 1440) {
        newCount = 3;
      } else if (width >= 1440) {
        newCount = 4;
      }
      setCount(newCount);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={styles.banner} style={{ display: "flex", flexDirection: "row", alignItems: "center", height: "100%", width: "100%", whiteSpace: "nowrap" }}>
      {titles.map((title, index) => (
        <div className={styles.bannerTitleContainer} key={index} style={{ flex: 1, padding: "0 15px" }}>
          <h2 className={styles.bannerTitle} style={{ margin: 0 }}>{title}</h2>
        </div>
      ))}
    </div>
  );
}

export default Banner;
