import React from "react";
import { LuMessageSquare, LuRepeat2 } from "react-icons/lu";
import { FaHeart, FaUser, FaCommentDots, FaSyncAlt } from "react-icons/fa";

function Notification({ type, username, icon }) {
  switch (type) {
    case "like":
      return (
        <div className="border-b border-zinc-800 flex gap-2 p-4 items-center">
          <div className="size-14 my-2 text-5xl flex items-center justify-center text-rose-500">
            <FaHeart />
          </div>
          <div className="flex items-center gap-2 w-full">
            <div className="rounded-full size-14 border my-2">
              <img src={icon} />
            </div>
            <p>
              <b>@{username}</b> liked your post
            </p>
          </div>
        </div>
      );
      break;
    case "follow":
      return (
        <div className="border-b border-zinc-800 flex gap-2 p-4 items-center">
          <div className="size-14 my-2 text-5xl flex items-center justify-center text-blue-500">
            <FaUser />
          </div>
          <div className="flex items-center gap-2 w-full">
            <div className="rounded-full size-14 border my-2">
              <img src={icon} />
            </div>
            <p>
              <b>@{username}</b> followed you
            </p>
          </div>
        </div>
      );
      break;
    case "repost":
      return (
        <div className="border-b border-zinc-800 flex gap-2 p-4 items-center">
          <div className="size-14 my-2 text-5xl flex items-center justify-center text-emerald-500">
            <FaSyncAlt />
          </div>
          <div className="flex items-center gap-2 w-full">
            <div className="rounded-full size-14 border my-2">
              <img src={icon} />
            </div>
            <p>
              <b>@{username}</b> reposted your post
            </p>
          </div>
        </div>
      );
      break;
    case "comment":
      return (
        <div className="border-b border-zinc-800 flex gap-2 p-4 items-center">
          <div className="size-14 my-2 text-5xl flex items-center justify-center text-cyan-400">
            <FaCommentDots />
          </div>
          <div className="flex items-center gap-2 w-full">
            <div className="rounded-full size-14 border my-2">
              <img src={icon} />
            </div>
            <p>
              <b>@{username}</b> commented on your post
            </p>
          </div>
        </div>
      );
      break;
  }
}

export default Notification;
