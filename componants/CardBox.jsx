import dimond from "../imgs/dimond.svg";
import bomb from "../imgs/bomb.svg";
import Card from "./Card";
import { useState, useEffect, useCallback, useMemo } from "react";
import '../src/index.css';

function CardBox({ minesCount, onCardClick, canFlipCards }) {
  const cards = useMemo(() => {
    const totalCards = 25;
    const diamondCount = totalCards - minesCount;

    const initialCards = [
      ...Array(diamondCount).fill({ id: 1, img: dimond, start: "" }),
      ...Array(minesCount).fill({ id: 0, img: bomb, start: "" }),
    ].sort(() => Math.random() - 0.5);

    return initialCards;
  }, [minesCount]);

  const [gameCards, setGameCards] = useState(cards);

  useEffect(() => {
    setGameCards(cards);
  }, [cards]);

  const handleClick = useCallback(
    (id) => {
      if (canFlipCards) {
        onCardClick(id);
      }
    },
    [onCardClick, canFlipCards]
  );

  return (
    <div className="box">
      <div className="container box-side">
        {gameCards.map((card, index) => (
          <Card key={index} imgs={card} id={card.id} click={handleClick} canFlipCards={canFlipCards} />
        ))}
      </div>
    </div>
  );
}

export default CardBox;
