import React, { useEffect, useState } from "react";

function ProfBio({ prof }) {
  const { count, nameProf } = prof;
  const [currentCount, setCurrentCount] = useState(0);

  useEffect(() => {
    const target = count;
    const speed = 200;

    const updateCount = () => {
      setCurrentCount((prevCount) => {
        const inc = target / speed;
        if (prevCount < target) {
          return Math.min(prevCount + inc, target);
        }
        return target;
      });
    };

    const interval = setInterval(updateCount, 1);
    if (currentCount === target) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [count, currentCount]);

  return (
    <div className="flex items-center justify-center gap-3 mt-4 text-neutral-600 text-center md:text-start">
      <div>
        <h1 className="font-extrabold">{Math.floor(currentCount)}</h1>
      </div>
      <div className="text-start max-w-20">
        <h6>{nameProf}</h6>
      </div>
    </div>
  );
}

export default ProfBio;
