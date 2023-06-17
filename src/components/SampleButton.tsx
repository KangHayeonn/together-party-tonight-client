// src/components/Button.tsx
import React from "react";

type ButtonProps = {
  text: string;
  disabled?: boolean;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({
  text,
  disabled = false,
  className,
}) => {
  return (
    <button className={className} disabled={disabled}>
      {text}
    </button>
  );
};

export default Button;
