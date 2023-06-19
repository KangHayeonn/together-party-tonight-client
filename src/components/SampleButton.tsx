// src/components/Button.tsx
import React from "react";

type ButtonProps = {
  text: string;
  disabled?: boolean;
  className?: string;
};

const Button = ({ text, disabled = false, className }: ButtonProps) => {
  return (
    <button className={className} disabled={disabled}>
      {text}
    </button>
  );
};

export default Button;
