import React from "react";

function ExperienceCard({ expValue }) {
  const { year, exName, insti } = expValue;
  return (
    <div>
      <h6 className="text-green-400 text-xs">{year}</h6>
      <h3 className="text-lg mt-3 text-white">{exName}</h3>
      <div className="flex items-center mt-3">
        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
        <p className="text-neutral-600 text-sm m-0 ms-2">{insti}</p>
      </div>
    </div>
  );
}

export default ExperienceCard;
