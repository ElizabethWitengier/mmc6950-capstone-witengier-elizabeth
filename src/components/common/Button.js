import { useRouter } from "next/router";
import React from "react";

const Button = ({ primary, secondary, children, className, link }) => {
  const router = useRouter();
  const primaryClass =
    "bg-primary-100 text-secondary-100 rounded-lg px-4 py-2 cursor-pointer";
  const secondaryClass =
    "bg-secondary-100 text-primary-100 rounded-lg px-4 py-2 cursor-pointer";
  return (
    <button
      onClick={() => {
        if (link) {
          router.push(link);
        }
      }}
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
