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
      // const storedContent = JSON.parse(localStorage.getItem('content'));
      // if (storedContent) {
      //   setContent(storedContent);
      // }
      const storedContent = localStorage.getItem('content');
    if (storedContent) {
      try {
        console.log("dtored"+ storedContent)
        const parsedContent = JSON.parse(storedContent);
        console.log("parsed"+ parsedContent)
        setContent(Array.isArray(parsedContent) ? parsedContent : [parsedContent]);
      } catch (e) {
        console.error("Error parsing content from localStorage", e);
        setContent([]);
      }
    }
    }, []);
  
    useEffect(() => {
      localStorage.setItem('content', JSON.stringify(content));
    }, [content]);

    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
      };
    const handleContentChange = (e) => {
      console.log(e)
      let uniqueNewContent;
      if (Array.isArray(e)) {
      uniqueNewContent = e.filter(item => !content.includes(item));
      if (uniqueNewContent.length > 0) {
        const updatedContent = [...content, ...uniqueNewContent];
        setContent(updatedContent);
        localStorage.setItem('content', JSON.stringify(updatedContent));
      }
      } else {
        //const newContent = e.split(',');
        //console.log("new content" + newContent)
        //uniqueNewContent = newContent.filter(item => !content.includes(item));
        console.log('weszło')
        localStorage.setItem('content', [e]);
      }
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