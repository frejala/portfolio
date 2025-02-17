import profilePic from "@/assets/profile.png";

export function Logo() {
  return (
    <div className="flex flex-shrink-0 items-center">
      <img className="mx-2 w-20" src={profilePic} alt="logo" />
    </div>
  );
}
