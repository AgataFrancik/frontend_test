import React from 'react';
import styles from '../styles/Header.module.scss';
import { useBreakpoints } from '../settings/ResponsiveSettings';

const Header = ({isVisible}) => {
  const {
    isLaptop
  } = useBreakpoints();
  return (
    <header className={`${isLaptop ? styles.LaptopHeader : styles.MobileHeader}`}>
      <a href="/" className={styles.logoContainer}>
        <div className={styles.circle}>
        <i class={`fa-brands fa-html5 ${isLaptop ? "fa-4x" : "fa-3x" }`} style={{color: "#fff"}}/>
        </div>
      </a>
      <div className={styles.textContainer}>
        <h1>Zadanie &nbsp;<p style={{fontWeight: 'bold'}}> rekrutacyjne</p></h1>
        {isVisible ? <h1 className={styles.name}>Agata Francik</h1> : <></>}
        </div>
    </header>
  );
};

export default Header;