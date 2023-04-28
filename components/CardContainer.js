import React from 'react';
import styles from './cardContainer.module.css';

function CardContainer(props) {
  return (
    <div className={styles.cardContainer}>
      {props.children}
    </div>
  );
}


export default CardContainer;
