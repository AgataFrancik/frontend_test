import React from 'react';
import styles from '../styles/ButtonComponent.module.scss';
import data from "../data/data.json";
import { useBreakpoints } from '../settings/ResponsiveSettings';

const ButtonComponent = ({selectedOption, onContentChange, content, setContent}) => {
  const {
    isLaptop
  } = useBreakpoints();


  const handleButtonClick = (event) => {
    let newContent;
    if (selectedOption === 'first') {
      newContent = [data[0]];
    } else if (selectedOption === 'second') {
      newContent = [data[1]];
    } else if (selectedOption === 'random') {
      let randomIndex;
      do {
        randomIndex = Math.floor(Math.random() * (data.length - 2)) + 2;
      } while (content.includes(data[randomIndex]) && content.length < data.length - 1);
      newContent = [data[randomIndex]];
    } else {
      alert("Nie zaznaczono nic w pierwszym bloku!");
      return 0;
    }
    if(event.target.id === 'zastap') onContentChange(newContent[0]);
        else {
            if (content.indexOf(newContent[0]) === -1) onContentChange([...content, newContent[0]]);
          else alert("Taka wartość już istnieje!");
          }
          setContent(prevContent => {
            const updatedContent = [...prevContent, ...newContent].filter((item, index, arr) => arr.indexOf(item) === index);
            return updatedContent.sort((a, b) => a.localeCompare(b));
          });
  };
  return (
    <div className={styles.Block}>
        <h4>BLOK DRUGI</h4>
        <div className={`${isLaptop ? styles.LaptopContainer : styles.MobileContainer}`}>
        <button id='zastap' onClick={handleButtonClick} className={`${isLaptop ? styles.LaptopButton : styles.MobileButton}`}>ZASTĄP</button>
        <button id='doklej' onClick={handleButtonClick} className={`${isLaptop ? styles.LaptopButton : styles.MobileButton}`}>DOKLEJ</button>
        </div>
    </div>
  );
};

export default ButtonComponent;