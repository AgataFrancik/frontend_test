 import styles from '../styles/Home.module.scss';
import ButtonComponent from './ButtonComponent';
 import RatioComponent from './RatioComponent';
 import { useState, useEffect } from 'react';
import TextComponent from './TextComponent';
import PopUpComponent from './PopUpComponent';
import { useBreakpoints } from '../settings/ResponsiveSettings';

const Home = ({onReset, onAddName, isShowed, isShowedBonus}) => {
  const {
    isLaptop
  } = useBreakpoints();
  
    const [selectedOption, setSelectedOption] = useState(null);
    const [content, setContent] = useState([""]);

    useEffect(() => {
      const storedContent = JSON.parse(localStorage.getItem('content'));
      if (storedContent) {
        setContent(storedContent);
      }
    }, []);
  
    useEffect(() => {
      localStorage.setItem('content', JSON.stringify(content));
    }, [content]);

    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
      };
    const handleContentChange = (e) => {
        setContent(e);
      };
    return (
        <div className={styles.Home}>
        <h1 className={`${isLaptop ? styles.LaptopText : styles.MobileText}`}>Nagłówek H1</h1>
        <h3>———————————</h3>
        <div className={styles.Blockes}>
          <div className={styles.RadioButton}>
            <RatioComponent onOptionChange={handleOptionChange}/>
            <ButtonComponent setContent={setContent} onContentChange={handleContentChange} selectedOption={selectedOption} content={content}/>
          </div>
          <div className={styles.Content}>
            <TextComponent content={content}/>
            </div>
        </div>
        {isShowed && <PopUpComponent onBonus={isShowedBonus} onReset={onReset} onAddName={onAddName}/>}
        </div>
    )
}

export default Home;