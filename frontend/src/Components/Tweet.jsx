import {
  LuMessageSquare,
  LuRepeat2,
  LuHeart,
  LuBookmark,
} from "react-icons/lu";

function Tweet({ icon, display_name, username }) {
  let time_since;

  return (
    <div className="border-b border-zinc-800 flex gap-2 p-4">
      <div className="rounded-full size-14 border my-2">
        <img src={icon} />
      </div>
      <div className="flex flex-col gap-1 w-full">
        <div className="flex gap-2">
          <p className="font-bold">{display_name}</p>
          <p className="text-zinc-500">@{username}</p>
          <p className="text-zinc-500">{time_since}</p>
        </div>
        <div>Text content</div>
        <div className="flex gap-2 justify-between text-zinc-500 text-lg">
          <div className="flex gap-2 items-center">
            <LuMessageSquare />
            <p>1</p>
          </div>
          <div className="flex gap-2 items-center">
            <LuRepeat2 />
            <p>2</p>
          </div>
          <div className="flex gap-2 items-center">
            <LuHeart />
            <p>3</p>
          </div>
          <div className="flex gap-2 items-center">
            <LuBookmark />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tweet;
