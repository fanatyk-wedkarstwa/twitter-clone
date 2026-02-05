import { FaImage, FaFaceSmile } from "react-icons/fa6";
import Tweet from "../Components/Tweet";

function Feed({ following, icon }) {
  return (
    <div>
      <div className="border-b border-zinc-800 p-2 py-4 flex gap-4">
        <div className="rounded-full size-14 border">
          <img src={icon} />
        </div>
        <div className="flex flex-col flex-1">
          <div className="border-b border-zinc-800 h-20">
            <textarea
              className="w-full h-full text-xl"
              placeholder="What is happening?!"
            ></textarea>
          </div>
          <div className="flex justify-between text-blue-400 text-xl py-2">
            <div className="flex items-center gap-2">
              <FaImage />
              <FaFaceSmile />
            </div>
            <button className="bg-blue-400 text-white font-semibold p-2 px-6 rounded-full text-base">
              Post
            </button>
          </div>
        </div>
      </div>
      {following ? (
        <div>
          <Tweet display_name={"Daisy John"} username={"daisyjohn"} />
        </div>
      ) : (
        <div>
          <Tweet display_name={"Daisy John"} username={"daisyjohn"} />
          <Tweet display_name={"Daisy John"} username={"daisyjohn"} />
          <Tweet display_name={"Daisy John"} username={"daisyjohn"} />
        </div>
      )}
    </div>
  );
}

export default Feed;
