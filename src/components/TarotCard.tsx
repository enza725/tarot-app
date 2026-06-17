import './TarotCard.css'

interface TarotCardProps {
  name: string
  image: string
  keywords: string[]
  reading: string
  isDrawn: boolean
}

function TarotCard({ name, image, keywords, reading, isDrawn }: TarotCardProps) {
  return (
    <>  
      <div className="tarot-card">
        <div className={`card-inner ${isDrawn ? 'revealed' : ''}`}>
          <div className="card-front">
            <img src={image} alt={name} className="card-image"></img>
          </div>
          <div className="card-back">
            <img src="/cards/card_back.webp" className="card-image"></img>
          </div>
        </div>
      </div>

      {/* クリックされたら、タロットカードを表示させる */}
      {isDrawn && (
        <>
          <div className="tarot-meaning">
            <h2>{name}</h2>

            <div className="tarot-keywords">
              {keywords.map((keyword) => (
                <span
                  key={keyword}
                  className="tarot-keyword-tag"
                >
                  {keyword}
                </span>
              ))}
            </div>

            <p className='tarot-reading'>{reading}</p>
          </div>
        </>
      )}
    </>
  )
}

export default TarotCard