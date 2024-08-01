import { useState } from "react";
import CardBox from "./../componants/CardBox";
import Sidebar from "../componants/Sidebar";
import "./App.css";
import "./index.css";

function App() {
  const [minesCount, setMinesCount] = useState(1);
  const [cardId, setCardId] = useState(null);
  const [openedCards, setOpenedCards] = useState(0);
  const [canFlipCards, setCanFlipCards] = useState(false);

  const handleMinesCountChange = (newCount) => {
    setMinesCount(newCount);
  };

  const handleCardClick = (id) => {
    if (canFlipCards) {
      setCardId(id);
      setOpenedCards((prev) => prev + 1);
    }
  };

  const handleBetButtonClick = () => {
    setCanFlipCards(true);
  };

  return (
    <>
      <div className="componants">
        <div className="row flex outer-compo">
          <div className="col">
            <Sidebar
              onMinesCountChange={handleMinesCountChange}
              cardId={cardId}
              openedCards={openedCards}
              onBetButtonClick={handleBetButtonClick}
            />
          </div>
          <div className="col">
            <CardBox
              onCardClick={handleCardClick}
              minesCount={minesCount}
              canFlipCards={canFlipCards}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
