import React from "react";

const PageHeader = ({ title, desc }) => {
  return (
    <div className="h-[50vh] flex items-center justify-center flex-col">
      <h1 className="text-center mt-8 text-2xl">{title}</h1>
      <p className="text-center mt-3">{desc}</p>
    </div>
  );
};

export default PageHeader;
