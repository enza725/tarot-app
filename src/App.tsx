import { useState } from 'react'
import './App.css'
import { tarotCards } from './data/tarotCards'
import TarotCard from'./components/TarotCard'

function App() {
  const [selectedCard, setSelectedCard] = useState(tarotCards[0]);
  const [isDrawn, setIsDrawn] = useState(false);

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
      <h1>✦ Tarot ✦</h1>
      <p>靜心一刻，讓今日的牌為你指引方向</p>

      <TarotCard
        name = {isDrawn ? selectedCard.name : ''}
        image = {selectedCard.image}
        keywords = {isDrawn ? selectedCard.keywords : []}
        reading={isDrawn ? selectedCard.reading : ''}
        isDrawn={isDrawn}
      />

      <button onClick={drawCard}>
        {isDrawn ? '再抽一次' : '抽出今日的牌'}
      </button>
    </main>
  )
}

export default App