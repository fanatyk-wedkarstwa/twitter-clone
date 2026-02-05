import { Link, Route, Routes } from "react-router";
import Feed from "../Components/Feed";

function Home() {
  return (
    <div className="flex-1 border-x border-zinc-800 align-middle">
      <div className="border-b border-zinc-800 flex p-3 text-xl">
        <div className="w-1/2 text-center">
          <Link to={"/"}>For you</Link>
        </div>
        <div className="w-1/2 text-center">
          <Link to={"/following"}>Following</Link>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Feed following={false} />} />
        <Route path="/following" element={<Feed following={true} />} />
      </Routes>
    </div>
  );
}

export default Home;
