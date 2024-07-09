//! Adding bitcoin svg and continue work.........

import bitcoin from "../imgs/bitcoin.svg";
import "../src/index.css";
function Sidebar() {
  return (
    <>
      <div className="side-bar w-96">
        <div className="input-boxex">
          <div className="side-bar-name mt-6 flex justify-between w-80">
            <span className="ml-6">Bet Amount</span>
            <span>0.00</span>
          </div>
          <br />
          <div className="h-12 w-72 ml-6 flex justify-center">
            <div className="input-box-with-bitcoin">
              <input
                type="number"
                className="input-area ml-6 mt-1 text-white h-10"
              />
              {/* Adding Bitcoin Image here */}
            </div>
            <div className="buttons-for-color mt-1 h-10 flex justify-center">
              <button className="bg-transparent p-1 text-xs font-bold h-10 w-8 rounded">
                1/2
              </button>
              <span className="mt-2 cursor-pointer text-black">|</span>
              <button className="bg-transparent h-10 w-8 text-xs font-bold rounded">
                2x
              </button>
            </div>
          </div>
        </div>
        <br />
        <div className="input-boxex-2 border border-black">
          <span className="ml-6">Mines</span>
          <br />
          <div className="div h-10 border border-b-amber-50">
            <select
              name="mines-count"
              id="mines-count"
              className="drop-down h-10 ml-6 w-60 text-white"
            >
              <option value="mines-count">1</option>
              <option value="mines-count">2</option>
              <option value="mines-count">3</option>
              <option value="mines-count">4</option>
              <option value="mines-count">5</option>
              <option value="mines-count">6</option>
              <option value="mines-count">7</option>
              <option value="mines-count">8</option>
              <option value="mines-count">9</option>
              <option value="mines-count">10</option>
              <option value="mines-count">11</option>
              <option value="mines-count">12</option>
              <option value="mines-count">13</option>
              <option value="mines-count">14</option>
              <option value="mines-count">15</option>
              <option value="mines-count">16</option>
              <option value="mines-count">17</option>
              <option value="mines-count">18</option>
              <option value="mines-count">19</option>
              <option value="mines-count">20</option>
              <option value="mines-count">21</option>
              <option value="mines-count">22</option>
              <option value="mines-count">23</option>
              <option value="mines-count">24</option>
            </select>
          </div>
        </div>
        <div className="button-bet">
          <button>Bet</button>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
