import React, { FC } from "react";
import { appendOptionalClasses } from "../util/appendOptionalClasses";

interface Props {
  className?: string;
}
export const H3: FC<Props> = ({ children, className }) => {
  const baseClasses = "text-2xl mb-4";
  const classes = appendOptionalClasses(baseClasses, className);
  return <h3 className={classes}>{children}</h3>;
};
