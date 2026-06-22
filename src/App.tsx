import { useState, useEffect } from 'react'
import './App.css'
import { tarotCards } from './data/tarotCards'
import { translations } from './data/translations'
import TarotCard from'./components/TarotCard'

function App() {
  type Language = 'ja' | 'zh';
  const languageList: Language[] = ['ja', 'zh'];
  const [selectedLanguage, setSelectedLanguage] = useState<Language>('ja');
  const [selectedCard, setSelectedCard] = useState(tarotCards[0]);
  const [isDrawn, setIsDrawn] = useState(false);

  useEffect(() => {
    // 先に写真を読み込ませる
    tarotCards.forEach((card) => {
      const img = new Image();
      img.src = card.image;
    })
  }, []);

  function changeLanguage(language: Language) {
    setSelectedLanguage(language);
  }

  function drawCard() {
    if (isDrawn) {
      setIsDrawn(false);
      return;
    }
    const randomIndex = Math.floor(Math.random() * tarotCards.length);
    setSelectedCard(tarotCards[randomIndex]);
    setIsDrawn(true);
  }

  return (
    <main className="app">
      {/* <div className="stars">
        {stars.map((star, index) => (
          <span key={index} className="star" style={{
            top: star.top,
            left: star.left,
            right: star.right,
            bottom: star.bottom
          }}>✦</span>
        ))}
      </div> */}

      <h1 className="title">✦ Arcana ✦</h1>
      <p className="subtitle">{translations.subtitle[selectedLanguage]}</p>

      <div className='language-div'>
        {languageList.map((language) => (
          <button className="language-btn" key={language} onClick={() => changeLanguage(language)}>
            {translations.languageBtn[language]}
          </button>
        ))}
      </div>

      <TarotCard
        name = {isDrawn ? selectedCard.name[selectedLanguage] : ''}
        image = {selectedCard.image}
        keywords = {isDrawn ? selectedCard.keywords[selectedLanguage] : []}
        reading={isDrawn ? selectedCard.reading[selectedLanguage] : ''}
        isDrawn={isDrawn}
      />

      <button className="draw-btn" onClick={drawCard}>
        {isDrawn ? translations.redrawBtn[selectedLanguage] : translations.drawBtn[selectedLanguage]}
      </button>
    </main>
  )
}

export default App