import React from "react";

const Button = (props) => {
  const buttonName = props.buttonName;
  const classes = props.classes;

  return (
    <div>
      <button type="button" className={classes}>
        {buttonName}
      </button>
    </div>
  );
};

export default Button;
