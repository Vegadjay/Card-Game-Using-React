import CardBox from "./../componants/CardBox";
import Sidebar from "../componants/Sidebar";
import "./App.css";
import "./index.css";
import { useState, useEffect } from "react";
function App() {
  const [selectedValue, setSelectedValue] = useState(1);
 
  return (
    <>
      <div className="componants flex justify-between mt-14 ml-12">
        <Sidebar
          selectedValue={selectedValue}
          setSelectedValue={setSelectedValue}
        />
        <CardBox bombCount1={selectedValue} />
      </div>
    </>
  );
}

export default App;
