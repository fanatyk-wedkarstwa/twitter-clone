import { FaArrowLeftLong } from "react-icons/fa6";

function Profile({ display_name, username, icon }) {
  let posts = 4;
  return (
    <div className="flex-1 border-x border-zinc-800 align-middle">
      <div className="flex items-center p-4 gap-8">
        <div>
          <FaArrowLeftLong />
        </div>
        <div>
          <p className="text-xl font-bold">{display_name}</p>
          <p>{posts} posts</p>
        </div>
      </div>

      <div className="w-full h-60 border border-zinc-800">
        <img />
      </div>

      <div className="p-8">
        <div className="size-50 absolute top-56 rounded-full border border-zinc-800 bg-neutral-900">
          <img src={icon} />
        </div>
        <div className="text-end mb-16">
          <button className="border p-2 px-4 text-xl rounded-full">
            Edit profile
          </button>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-2xl">{display_name}</p>
          <p className="text-zinc-500">@{username}</p>
          <p>bio</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
