import React from "react";
import { Button } from "react-bootstrap";
import "../assets/css/ReusableButton.css";

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
  const customClassName = variant === "primary" ? "custom-button-primary" : "";

  return (
    <Button
      variant={variant}
      size={size}
      disabled={disabled}
      onClick={onClick}
      type={type}
      className={`btn ${className} ${customClassName}`}
      {...props}
    >
      {children}
    </Button>
  );
};

export default ReusableButton;
