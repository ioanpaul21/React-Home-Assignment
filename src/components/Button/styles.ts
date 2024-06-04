import styled from "styled-components";
import { Theme } from "../../theme/types";
import { ButtonVariants } from "./types";

const getButtonStyles = (theme: Theme, variant?: ButtonVariants) => {
  switch (variant) {
    case "primary":
      return `
          background: #a3ff12;
          color: #222430;
          font-weight: bold;
        `;
    case "secondary":
      return `
          background:#ed2e73;
          color: ${theme.colors.white};
          font-weight: bold;
        `;
    default:
      return "";
  }
};

export const StyledButton = styled.button<{ variant?: ButtonVariants }>`
  padding: ${({ theme }) => theme.spacing.medium};
  font-size: ${({ theme }) => theme.typography.fontSizes.medium};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  min-width: 120px;

  &:hover {
    opacity: 0.8;
  }

  ${({ theme, variant }) => getButtonStyles(theme as Theme, variant)}
`;
