import React, { FC } from "react";
import { appendOptionalClasses } from "../util/appendOptionalClasses";

interface Props {
  className?: string;
  type?: "button" | "submit";
}

const PrimaryButton: FC<Props> = ({ className, children, type }) => {
  const baseClasses =
    "border-2 border-black border-solid rounded-lg bg-pokemon-theme-yellow w-24 font-semibold shadow-sm cursor-pointer hover:opacity-75 focus:opacity-75";
  const classes = appendOptionalClasses(baseClasses, className);
  return (
    <button type={type} className={classes}>
      {children}
    </button>
  );
};

export default PrimaryButton;
