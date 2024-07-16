import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import ExpandedFooter from './components/ExpandedFooter';
import { useState } from 'react';
import styles from './App.module.scss';

function App() {
  const [showOptions, setShowOptions] = useState(false);
  const [isShowed, setIsShowed] = useState(false);
  const [nameVisible, setNameVisible] = useState(false);

  const toggleShowOptions = () => {
    setIsShowed(!isShowed);
  };
  
  const handleShowOptions = () => {
    setShowOptions(!showOptions);
  };

  const handleReset = () => {
    localStorage.removeItem('content');
    window.location.reload();
  };

  const handleAddName = () => {
    setNameVisible(!nameVisible);
  }

  const handleAddBonus = () => {
    const header = document.querySelector('header p');
    if (!header.textContent.includes(' :D')) {
      header.textContent += ' :D';
    } else header.textContent = 'rekrutacyjne';
  };

  return (
    <div className={styles.App}>
      <Header isVisible={nameVisible}/>
      <Home isShowedBonus={showOptions} isShowed={isShowed} onReset={handleReset} onAddName={handleAddName}/>
      <Footer isShowedBonus={showOptions} onShowOptions={toggleShowOptions} onShowBonusOptions={handleShowOptions} isShowed={isShowed} />
      <ExpandedFooter addBonus={handleAddBonus} isShowed={showOptions} />
    </div>
  );
}

export default App;
