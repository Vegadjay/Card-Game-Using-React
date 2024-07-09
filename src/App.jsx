import CardBox from "./../componants/CardBox";
import Sidebar from "../componants/Sidebar";
import "./App.css";
import "./index.css";
function App() {
  return (
    <>
      <div className="componants flex justify-between gap-72 mt-36 ml-12">
        <Sidebar />
        <CardBox />
      </div>
    </>
  );
}

export default App;
