import { MdLogout } from "react-icons/md";

function ProfileStr({ icon, display_name, username }) {
  return (
    <div className="mt-auto flex gap-2 text-3xl items-center min-w-60">
      <div className="rounded-full size-14 border">
        <img src={icon} />
      </div>
      <div className="flex flex-col text-xl">
        <p>{display_name}</p>
        <p className="text-zinc-500">@{username}</p>
      </div>
      <div className="ml-auto">
        <button className="bg-white text-black font-semibold p-2 rounded-full text-xl">
          Follow
        </button>
      </div>
    </div>
  );
}

export default ProfileStr;
