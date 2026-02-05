import ProfileStr from "./ProfileStr";

function RightBar() {
  return (
    <div className="h-screen py-4 px-8 w-1/5">
      <div className="bg-zinc-800 p-4 rounded-xl">
        <p className="text-xl mb-2 font-bold">Who to follow</p>
        <div className="flex flex-col gap-2">
          <ProfileStr display_name={"Lauren Paul"} username={"laurenpaul"} />
          <ProfileStr display_name={"Lilly Dean"} username={"lillydean"} />
          <ProfileStr display_name={"Max Dale"} username={"maxdale"} />
        </div>
      </div>
    </div>
  );
}

export default RightBar;
