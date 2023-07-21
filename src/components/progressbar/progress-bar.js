import React, { useState, useEffect } from "react";

//style={{ width: `${progress}%` }}

const ProgressBar = () => {
  const [progress, setProgress] = useState([
    <div className="w-1/3 h-full bg-[#04AC7D]" />,
  ]);

  const addProgress = () => {
    setProgress([...progress, <div className="w-1/3 h-full bg-[#04AC7D]" />]);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (progress.length === 3) {
        setProgress([<div className="w-1/3 h-full bg-[#04AC7D]" />]);
        return;
      }
      addProgress();
    }, 1000 / 2);

    return () => clearInterval(intervalId);
  }, [progress]);

  return (
    <div
      className="w-[56px] h-[28px] p-[3px] flex gap-[2px]"
      style={{ border: "4px solid #04AC7D", borderRadius: "7px" }}
    >
      {progress.map((p) => {
        return p;
      })}
    </div>
  );
};

export default ProgressBar;
