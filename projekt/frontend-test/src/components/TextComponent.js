import React from 'react';
import styles from '../styles/TextComponent.module.scss';

const TextComponent = ({content}) => {
  return (
    <div className={styles.Text}>
        <h4>BLOK Z DŁUGĄ NAZWĄ KTÓRA SAMA SIĘ PRZYTNIE I TO JEST TEN TEKST PRZYCIĘTY WŁAŚNIE</h4>
        <div className={styles.Content}>Moje zainteresowania to:{
          content.length < 1 ? (
          content.sort((a, b) => a.localeCompare(b)).map((text, index) => (
          <p key={index}>{text}</p>
        ))) : (
        <p>{content}</p> )
        } </div>
    </div>
  );
};

export default TextComponent;