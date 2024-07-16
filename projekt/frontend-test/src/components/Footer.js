import React from 'react';
import styles from '../styles/Footer.module.scss';
import { useBreakpoints } from '../settings/ResponsiveSettings';

const Footer = ({ isShowedBonus, onShowBonusOptions, onShowOptions, isShowed }) => {
  const {
    isLaptop
  } = useBreakpoints();
  return (
    <footer className={styles.footer}>
      <div className={styles.LogoTextBox}>
        <div className={styles.LogoText}>CSS</div>
        <div className={styles.LogoText}>IS</div>
        <div >AWESOME</div>
      </div>
      <div className={styles.LogoFrame}></div>
      {isLaptop ? <div className={styles.Text}>—nabthat—</div> : <></>}
      <div className={styles.ButtonContainer}>
      <button className={styles.Button} onClick={onShowBonusOptions}>{isShowedBonus ? "Schowaj " : "Pokaż Bonus " }{isShowedBonus ? <i class="fa-solid fa-chevron-down"/> : <i class="fa-solid fa-chevron-up"/> }</button>
      <button className={styles.Button} onClick={onShowOptions}>{isShowed ? "Schowaj " : "Pokaż " } {isShowed ? <i class="fa-solid fa-chevron-down"/> : <i class="fa-solid fa-chevron-up"/> } </button>
      </div>
    </footer>
  );
};

export default Footer;