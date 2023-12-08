import React from "react";
import styles from "./Button.module.scss";

export default function Button({ buttonText, mode, ...rest }) {
  const buttonCustomStyle = React.useMemo(
    () => (mode ? mode.map((style) => styles[style]).join(" ") : " "),
    [mode]
  );
  return (
    <button className={buttonCustomStyle} {...rest}>
      {buttonText}
    </button>
  );
}
