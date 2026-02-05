import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./Pages/Home.jsx";
import LeftBar from "./Components/LeftBar.jsx";
import RightBar from "./Components/RightBar.jsx";

function App() {
  return (
    <div className="flex bg-black text-white justify-between">
      <LeftBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <RightBar />
    </div>
  );
}

export default App;
