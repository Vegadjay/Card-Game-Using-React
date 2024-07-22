import { useState } from "react";
import CardBox from "./../componants/CardBox";
import Sidebar from "../componants/Sidebar";
import "./App.css";
import "./index.css";

function App() {
  const [minesCount, setMinesCount] = useState(1);

  const handleMinesCountChange = (newCount) => {
    setMinesCount(newCount);
  };

  return (
    <>
      <div className="componants flex justify-between mt-7 ml-10">
        <Sidebar onMinesCountChange={handleMinesCountChange} />
        <CardBox minesCount={minesCount} />
      </div>
    </>
  );
}

export default App;
