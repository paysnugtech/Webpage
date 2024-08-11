Button.js;
import React from "react";
import { Button } from "react-bootstrap";

const ReusableButton = ({
  children,
  variant = "primary",
  size = "lg",
  disabled = false,
  onClick = () => {},
  type = "button",
  className = "mx-0 rounded-5 custom-button",
  ...props
}) => {
  return (
    <Button
      variant={variant}
      size={size}
      disabled={disabled}
      onClick={onClick}
      type={type}
      className={`btn ${className}`}
      {...props}
    >
      {children}
    </Button>
  );
};

export default ReusableButton;
