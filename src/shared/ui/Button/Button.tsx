"use client";
import cn from "classnames";
import { Icon } from "../Icon/Icon";
import { ButtonProps } from "./Button.props";

import styles from "./Button.module.css";

export function Button({
  children,
  className,
  appearrance = "primary",
  size = "m",
  icon,
  ...props
}: ButtonProps) {
  const IconComponent = icon ? Icon[icon] : null;

  return (
    <button
      className={cn(
        styles.button,
        styles[size],
        styles[appearrance],
        className
      )}
      {...props}
    >
      {IconComponent && <IconComponent className={styles.icon} />}
      {children}
    </button>
  );
}
