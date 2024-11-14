import React from "react";

function SocialIcon({ icons }) {
  console.log(icons);
  return (
    <>
      <button className=" btn_ani  hover:text-black border-1 animate__animated animate__bounce border-green-400 w-10 h-10 rounded-full flex items-center justify-center">
        <i className={`hover:text-black ${icons.iconUrl}`}></i>
      </button>
    </>
  );
}

export default SocialIcon;
