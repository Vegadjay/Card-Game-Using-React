import { useState } from "react";
import rupee from "../imgs/rupee.svg";
import "../src/index.css";

function Sidebar({ onMinesCountChange }) {
  const [money, moneyUpdate] = useState(0);
  const [minesCount, setMinesCount] = useState(1);
  const [price, usePrice] = useState(0);

  // Half the money
  const halfMoney = () => {
    var newval = money * 0.5;
    var moneyPrice = newval;
    moneyUpdate(newval);
    usePrice(moneyPrice);
  };

  // Double the money
  const doubleMoney = () => {
    var newval = money * 2;
    var moneyPrice = newval;
    moneyUpdate(newval);
    usePrice(moneyPrice);
  };

  const countValue = (event) => {
    moneyUpdate(event.target.value);
    usePrice(event.target.value);
  };

  const handleMinesCountChange = (event) => {
    const newValue = parseInt(event.target.value);
    setMinesCount(newValue);
    onMinesCountChange(newValue);
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
                {price}₹
              </span>
            </div>
            <div className="div-outer-for-border flex items-center border border-gray-600 rounded">
              <div className="input-box-with-bitcoin flex-grow">
                <input
                  type="number"
                  className="input-area w-40 bg-transparent text-white p-2"
                  value={money}
                  onChange={countValue}
                />
              </div>
              <div className="coin absolute">
                <img src={rupee} alt="bitcoin img" height={20} width={20} />
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
            className="block  proxima_nova_rgregular_line text-gray-300 "
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

        <div className="button-bet">
          <button className="bet-button w-full bg-green-700 proxima_nova_rgregular_line text-white py-3 rounded-md transition duration-300">
            Bet
          </button>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
