import React from "react";

const Stripes = ({ children }) => {
  const stripes = new Array(15).fill(null); // Large enough to fill the page width

  return (
    <div className="relative min-h-screen flex">
      {stripes.map((_, index) => (
        <div
          key={index}
          className={`h-[720px] w-[100px] ${index % 2 === 0 ? "bg-[#F9F7F1]" : "bg-[##F5F1E9]"}`}
        ></div>
      ))}
      <div className="absolute inset-0">{children}</div>
    </div>
  );
};

export default Stripes;
