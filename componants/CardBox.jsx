import dimond from "../imgs/dimond.svg";
import bomb from "../imgs/bomb.svg";
import Card from "./Card";
import { useState, useCallback, useMemo } from "react";

function CardBox({ bombCount = 1 }) {
  const cards = useMemo(() => {
    const totalCards = 25;
    const diamondCount = totalCards - bombCount;
    
    const initialCards = [
      ...Array(diamondCount).fill({ id: 1, img: dimond, start: "" }),
      ...Array(bombCount).fill({ id: 0, img: bomb, start: "" })
    ].sort(() => Math.random() - 0.5);

    return initialCards;
  }, [bombCount]);

  const [gameCards, setGameCards] = useState(cards);

  const handleClick = useCallback((id) => {
    alert(id);
  }, []);

  return (
    <div className="box">
      <div className="container">
        {gameCards.map((card, index) => (
          <Card key={index} imgs={card} id={card.id} click={handleClick} />
        ))}
      </div>
    </div>
  );
}

export default CardBox;