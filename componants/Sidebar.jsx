import { useState } from "react";
import bitcoin from "../imgs/bitcoin.svg";
import CardBox from "./CardBox";
import "../src/index.css";

function Sidebar() {

  function halfBet() {
    
  }

  return (
    <>
      <div className="side-bar bg-gray-800 p-6 rounded-lg shadow-lg">
        <div className="input-boxes">
          <div className="amount-div mb-6">
            <div className="side-bar-name flex justify-between items-center mb-2">
              <span className="text-gray-300">Bet Amount</span>
              <span className="text-gray-300">$0.00</span>
            </div>
            <div className="div-outer-for-border flex items-center border border-gray-600 rounded">
              <div className="input-box-with-bitcoin flex-grow">
                <input
                  type="number"
                  className="input-area w-full bg-transparent text-white p-2"
                />
              </div>
              <div className="buttons-for-color flex items-center">
                <button className="btn-into bg-transparent h-10 w-10 text-xs font-bold p-2 text-gray-300 hover:bg-gray-700 rounded">
                  1/2
                </button>
                <span className="text-black mx-1 hover:cursor-pointer ">|</span>
                <button className="btn-into bg-transparent h-10 w-10 text-xs font-bold p-2 text-gray-300 hover:bg-gray-700 rounded">
                  2x
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="input-boxes-2 mb-6">
          <label htmlFor="mines-count" className="block text-gray-300 mb-2">
            Mines
          </label>
          <div className="div-outer-for-border border rounded">
            <select
              name="mines-count"
              id="mines-count"
              className="drop-down w-full bg-gray-700 text-white p-2 rounded-md"
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
          <button className="bet-button w-full bg-green-700 text-white py-3 rounded-md transition duration-300">
            Bet
          </button>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
