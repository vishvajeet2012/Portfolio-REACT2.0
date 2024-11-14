import React from "react";

function ResumeBtns({ resBtn }) {
  const { btnName } = resBtn;
  return (
    <>
      <button className="bg-zinc-800  py-3 mt-3 hover:bg-green-400  text-white hover:text-black rounded-md text-sm w-full">
        {btnName}
      </button>
    </>
  );
}

export default ResumeBtns;
