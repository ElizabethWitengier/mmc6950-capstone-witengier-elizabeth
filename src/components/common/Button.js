import React from "react";

const Button = ({ primary, secondary, children, className }) => {
  const primaryClass = "bg-primary-100 text-secondary-100 rounded-lg px-4 py-2";
  const secondaryClass =
    "bg-secondary-100 text-primary-100 rounded-lg px-4 py-2";
  return (
    <button
      className={
        primary
          ? primaryClass
          : secondary
          ? secondaryClass
          : className
          ? className
          : ""
      }
    >
      {children}
    </button>
  );
};

export default Button;
