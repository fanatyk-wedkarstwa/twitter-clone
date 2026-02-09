import { FaXTwitter, FaBell } from "react-icons/fa6";
import { MdHomeFilled, MdPerson } from "react-icons/md";
import ProfileUsr from "./ProfileUsr";
import { Link } from "react-router";

function LeftBar() {
  return (
    <div className="h-screen flex flex-col gap-8 text-5xl py-4 px-8 w-1/5">
      <FaXTwitter />
      <div className="text-xl flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <MdHomeFilled />
          <Link to={"/"}>Home</Link>
        </div>
        <div className="flex items-center gap-4">
          <FaBell />
          <Link to={"/notifications"}>Notifications</Link>
        </div>
        <div className="flex items-center gap-4">
          <MdPerson />
          <Link to={"/profile"}>Profile</Link>
        </div>
      </div>
      <ProfileUsr display_name={"Fishing"} username={"fishing"} />
    </div>
  );
}

export default LeftBar;
