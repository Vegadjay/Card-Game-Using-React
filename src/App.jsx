import { useState } from "react";
import CardBox from "./../componants/CardBox";
import Sidebar from "../componants/Sidebar";
import "./App.css";
import "./index.css";

function App() {
  const [minesCount, setMinesCount] = useState(1);
  const [cardId, setCardId] = useState(null);
  const [openedCards, setOpenedCards] = useState(0);

  const handleMinesCountChange = (newCount) => {
    setMinesCount(newCount);
  };

  const handleCardClick = (id) => {
    setCardId(id);
    setOpenedCards((prev) => prev + 1);
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
        />
          </div>
          <div className="col">
          <CardBox onCardClick={handleCardClick} minesCount={minesCount} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
