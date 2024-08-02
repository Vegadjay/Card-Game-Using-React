import { useEffect, useState } from "react";
import rupee from "../imgs/rupee.svg";
import "../src/index.css";

function Sidebar({
  onMinesCountChange,
  openedCards,
  betAmount,
  onBetAmountChange,
  onBetButtonClick,
}) {
  const [minesCount, setMinesCount] = useState(1);
  const [amount, setAmount] = useState(0);
  const [profitMultiplier, setProfitMultiplier] = useState(1.13);
  const [profitPrice, setProfitPrice] = useState(0);
  const [betPlaced, setBetPlaced] = useState(false);

  const halfMoney = () => {
    const newAmount = amount * 0.5;
    if (newAmount >= 1) {
      setAmount(newAmount);
      onBetAmountChange(newAmount);
    }
  };

  const doubleMoney = () => {
    const newAmount = amount * 2;
    if (newAmount >= 1) {
      setAmount(newAmount);
      onBetAmountChange(newAmount);
    }
  };

  const handleBetAmountChange = (event) => {
    const newAmount = Number(event.target.value);
    if (newAmount >= 1) {
      setAmount(newAmount);
      onBetAmountChange(newAmount);
    }
  };

  const handleMinesCountChange = (event) => {
    const newValue = parseInt(event.target.value);
    setMinesCount(newValue);
    onMinesCountChange(newValue);
  };

  useEffect(() => {
    setProfitMultiplier(1.00 + openedCards * 0.13);
  }, [openedCards]);

  useEffect(() => {
    setProfitPrice((amount * profitMultiplier).toFixed(2));
  }, [amount, profitMultiplier]);

  const handleBetClick = () => {
    if (amount > 0) {
      setBetPlaced(true);
      onBetButtonClick();
    }
  };

  return (
    <>
      <div className="side-bar bg-gray-800 p-6 rounded-lg shadow-lg">
        <div className="input-boxes">
          <div className="amount-div mb-6">
            <div className="side-bar-name flex justify-between items-center ">
              <span className="text-gray-300 proxima_nova_rgregular_line">
                Bet Amount
              </span>
              <span className="text-gray-300 proxima_nova_rgregular_line">
                {amount}₹
              </span>
            </div>
            <div className="div-outer-for-border flex items-center border border-gray-600 rounded">
              <div className="input-box-with-bitcoin flex-grow">
                <input
                  type="number"
                  className="input-area bg-transparent text-white p-2"
                  placeholder={"0.000000"}
                  onChange={handleBetAmountChange}
                />
              </div>
              <div className="buttons-for-color flex items-center">
                <button
                  className="btn-into bg-transparent h-10 w-10 proxima_nova_rgregular_line text-xs font-bold p-2 text-gray-300 hover:bg-gray-700 rounded"
                  onClick={halfMoney}
                >
                  1/2
                </button>
                <span className="text-black mx-1 hover:cursor-pointer">|</span>
                <button
                  className="btn-into bg-transparent h-10 w-10 text-xs font-bold p-2 proxima_nova_rgregular_line text-gray-300 hover:bg-gray-700 rounded"
                  onClick={doubleMoney}
                >
                  2x
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="input-boxes-2 mb-6">
          <label
            htmlFor="mines-count"
            className="block proxima_nova_rgregular_line text-gray-300 "
          >
            Mines
          </label>
          <div className="div-outer-for-border border rounded">
            <select
              name="mines-count"
              id="mines-count"
              className="drop-down w-full bg-gray-700 text-white p-2 rounded-md"
              value={minesCount}
              onChange={handleMinesCountChange}
            >
              {[...Array(24)].map((_, i) => (
                <option key={i} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
          </div>
        </div>

        {betPlaced && (
          <div className="profit-bars">
            <span className="text-gray-300 proxima_nova_rgregular_line">
              Profit Amount ({profitMultiplier.toFixed(2)}X)
            </span>
            <div className="profit-bar-first">
              <input
                type="number"
                className="input-area1 w-60 bg-transparent text-white p-2"
                value={profitPrice}
                disabled
              />
            </div>
          </div>
        )}
        <div className="button-bet mt-4">
          <button
            className="bet-button w-full bg-green-700 proxima_nova_rgregular_line text-white py-3 rounded-md transition duration-300"
            onClick={handleBetClick}
          >
            Bet
          </button>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
