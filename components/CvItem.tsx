import React from "react";

function CvItem({
  company,
  position,
  date,
}: {
  company: string;
  position: string;
  date: string;
}) {
  return (
    <div className="mb-4 last:mb-0 flex border-b border-[#555] justify-between">
      <div className="flex flex-col">
        <h3 className="text-lg">{company}</h3>
        <p className="opacity-70">{position}</p>
      </div>
      <p className="text-lg text-right">{date}</p>
    </div>
  );
}

export default CvItem;
