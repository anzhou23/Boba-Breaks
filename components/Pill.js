import React from 'react';
import styles from './pill.module.css';

const Pill = ({ children, color }) => {
  const pillStyle = {
    backgroundColor: color,
    color: getTextColorForBackground(color)
  };

  function getTextColorForBackground(backgroundColor) {
    // this function calculates the appropriate text color based on the background color
    // you can customize this function based on your needs
    // this ex. returns white text for dark backgrounds & black text for light backgrounds:
    const hex = backgroundColor.replace('#', '');
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    const yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
    return (yiq >= 128) ? '#000' : '#fff';
  }

  return <div className={styles.pill} style={pillStyle}>{children}</div>;
};

export default Pill;
