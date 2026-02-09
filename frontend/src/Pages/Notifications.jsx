import Notification from "../Components/Notification";
import { GoGear } from "react-icons/go";

function Notifications() {
  return (
    <div className="flex-1 border-x border-zinc-800 align-middle">
      <div className="border-b border-zinc-800 flex  p-3 text-xl items-center justify-between">
        <p>Notifications</p>
        <GoGear />
      </div>
      <Notification username={"fishingenthusiast"} type={"like"} />
      <Notification username={"fishingenthusiast"} type={"follow"} />
      <Notification username={"fishingenthusiast"} type={"repost"} />
      <Notification username={"fishingenthusiast"} type={"comment"} />
    </div>
  );
}

export default Notifications;
