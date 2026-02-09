import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./Pages/Home.jsx";
import LeftBar from "./Components/LeftBar.jsx";
import RightBar from "./Components/RightBar.jsx";
import Notifications from "./Pages/Notifications.jsx";
import Profile from "./Pages/Profile.jsx";

function App() {
  return (
    <div className="flex bg-neutral-900 text-white justify-between">
      <BrowserRouter>
        <LeftBar />
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route
            path="/profile"
            element={
              <Profile
                display_name={"Fishing Enthusiast"}
                username={"fishing"}
              />
            }
          />
        </Routes>
      </BrowserRouter>
      <RightBar />
    </div>
  );
}

export default App;
