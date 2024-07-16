import React from 'react';
import styles from '../styles/RatioComponent.module.scss';
import { useBreakpoints } from '../settings/ResponsiveSettings';

const RatioComponent = ({ onOptionChange }) => {
  const {
    isLaptop
  } = useBreakpoints();
  return (
    <div className={styles.Options}>
        <h4>BLOK PIERWSZY</h4>
        <label className={`${isLaptop ? styles.LaptopRadio : styles.MobileRadio}`}>
        <input name='radio' type="radio" value="first" onChange={onOptionChange}/>
          <span>Opcja pierwsza</span>
        </label>
        <label className={`${isLaptop ? styles.LaptopRadio : styles.MobileRadio}`}>
        <input name='radio' type="radio" value="second" onChange={onOptionChange}/>
          <span>Opcja druga</span>
        </label>
        <label className={`${isLaptop ? styles.LaptopRadio : styles.MobileRadio}`}>
        <input name='radio' type="radio" value="random" onChange={onOptionChange}/>
          <span>Opcja losowa</span>
        </label>
    </div>
  );
};

export default RatioComponent;