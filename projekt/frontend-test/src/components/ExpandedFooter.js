import React from 'react';
import styles from '../styles/ExpandedFooter.module.scss';

const ExpandedFooter = ({ isShowed, addBonus }) => {
  return (
    <div className={`${isShowed ? styles.ExpandedFooterVisible : styles.ExpandedFooter}`}>
     {isShowed ?
     <div className={styles.bonusContainer}>
        <h1>Dziękuję za możliwość wykonania zadania ;)</h1>
        <button className={styles.Button} onClick={addBonus}>Dodaj bonus</button>
        </div>
      : <React.Fragment/>
    }
    </div>
  );
};

export default ExpandedFooter;