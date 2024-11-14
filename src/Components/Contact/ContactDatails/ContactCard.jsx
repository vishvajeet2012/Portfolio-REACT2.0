import React from "react";

function ContactCard({ data }) {
  const { iconClass, conName, manName, url } = data;
  return (
    <>
      <div className="grid grid-cols-5 gap-4 items-center w-full mt-4">
        <a href={url} className="animate__animated   animate__zoomIn">
          <div className="bg-zinc-800 col-span-1 p-3 w-16 flex items-center justify-center h-16 rounded-lg">
            <i class={`text-2xl text-green-400 ${iconClass}`}></i>
          </div>
        </a>

        <div className="col-span-3 main_detailss animate__animated   animate__fadeInRight">
          <p className="text-neutral-600">{conName}</p>
          <h6 className="text-white">{manName}</h6>
        </div>
      </div>
    </>
  );
}

export default ContactCard;
