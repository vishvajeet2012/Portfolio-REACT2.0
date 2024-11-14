import React from "react";
import "../Servies.css";

function ServiceCard({ cardValue }) {
  const { id, title, desc, btnBg, idBorder } = cardValue;
  return (
    <>
      <div className="p-4 shadow-md shadow-slate-800">
        <div className="flex justify-between">
          <h2 className="services_h2 md:text-3xl lg:text-5xl" style={{ WebkitTextStroke: idBorder }}>{id}</h2>
          <button
            className={`h-12 w-12  rounded-full bg-${btnBg} transform rotate-45 hover:rotate-0 flex justify-center items-center`}
          >
            <i class="fa-solid fa-arrow-right-long"></i>
          </button>
        </div>
        <h2 className={`text-${btnBg} mt-3 md:text-2xl lg:text-3xl `}>{title}</h2>
        <p className="mt-3 text-neutral-600 md:text-sm lg:text-lg">{desc}</p>
      </div>
    </>
  );
}

export default ServiceCard;
