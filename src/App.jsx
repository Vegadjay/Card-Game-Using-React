import CardBox from "./../componants/CardBox";
import Sidebar from "../componants/Sidebar";
import "./App.css";
import "./index.css";
function App() {
  return (
    <>
      <div className="componants flex justify-between pt-9 gap-72 mr-48">
        <Sidebar />
        <CardBox />
      </div>
    </>
  );
}

export default App;
