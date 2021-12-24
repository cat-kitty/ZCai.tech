import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

//This is an array with css classes
const STYLES = ["btn--primary", "btn--outline"];
//In btn-primary, there is a solid button background
//In btn-outline, you can see through the button to the background

const SIZES = ["btn--medium", "btn--large"];

export const Button2 = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];
  //From the array, btn-primary will be applied by default if not specified

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <Link
      to={{
        pathname: "./files/ZhiRongCaiResume.pdf",
      }}
      target="_blank"
      className="btn-mobile"
      download="Zhi Rong Cai Resume"
    >
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};
