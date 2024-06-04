import { FC, ReactNode } from "react";
import { StyledButton } from "./styles";
import { ButtonVariants } from "./types";

interface ButtonProps {
  children?: ReactNode;
  ariaLabel: string;
  variant?: ButtonVariants;
  onClick?: () => void;
  disabled?: boolean;
}

export const Button: FC<ButtonProps> = ({
  children,
  ariaLabel,
  variant,
  onClick,
  disabled,
}) => (
  <StyledButton
    aria-label={ariaLabel}
    variant={variant}
    onClick={onClick}
    disabled={disabled}
  >
    {children}
  </StyledButton>
);
