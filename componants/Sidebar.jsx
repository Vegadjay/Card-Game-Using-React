function Sidebar() {
  return (
    <>
      <div className="side-bar bg-slate-800 w-96 ">
        <div className="input-boxex">
          <span className="ml-6">Bet Amount</span>
          <br />
          <div className="div border border-black h-12 w-72 ml-6 flex justify-center">
            <input
              type="number"
              value={0.0}
              className="ml-6 mt-4 text-black bg-slate-600 h-10"
            />
            <div className="flex justify-center">
              <button className="bg-gray-700 w-10">1/2</button>
              <span>|</span>
              <button className="bg-gray-700 w-10">2X</button>
            </div>
          </div>
        </div>
        <br />
        <div className="input-boxex-2">
          <span className="ml-6">Mines</span>
          <br />
          <select name="mines-count" id="mines-count" className="ml-6">
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
        <div className="button-bet">
          <button>Bet</button>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
