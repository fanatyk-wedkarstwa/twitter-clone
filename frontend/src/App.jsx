import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./Pages/Home.jsx";
import { FaXTwitter, FaBell } from "react-icons/fa6";
import { MdHomeFilled, MdPerson, MdLogout } from "react-icons/md";

function App() {
  return (
    <div className="flex bg-black text-white justify-center">
      <div className="h-screen w-fit flex flex-col gap-8 text-5xl py-4 px-8">
        <FaXTwitter />
        <div className="text-2xl flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <MdHomeFilled />
            <p>Home</p>
          </div>
          <div className="flex items-center gap-4">
            <FaBell />
            <p>Notifications</p>
          </div>
          <div className="flex items-center gap-4">
            <MdPerson />
            <p>Profile</p>
          </div>
        </div>
        <div className="mt-auto flex gap-2 text-3xl items-center min-w-60">
          <div className="rounded-full size-14 border">
            <img src="" />
          </div>
          <div className="flex flex-col text-xl">
            <p>Fishing</p>
            <p className="text-zinc-500">@fishing</p>
          </div>
          <div className="ml-auto">
            <MdLogout />
          </div>
        </div>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <div className="h-screen w-fit flex flex-col gap-8 text-3xl py-4 px-8">
        <div>
          <p>Who to follow</p>
          <p>Thing 1</p>
          <p>Thing 2</p>
          <p>Thing 3</p>
        </div>
      </div>
    </div>
  );
}

export default App;
