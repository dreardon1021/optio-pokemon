import React, { FC } from "react";
import { appendOptionalClasses } from "../util/appendOptionalClasses";

interface Props {
  className?: string;
  type?: "button" | "submit";
}

const PrimaryButton: FC<Props> = ({ className, children, type }) => {
  const baseClasses = "border-2 border-black border-solid rounded-lg";
  const classes = appendOptionalClasses(baseClasses, className);
  return (
    <button type={type} className={classes}>
      {children}
    </button>
  );
};

export default PrimaryButton;
