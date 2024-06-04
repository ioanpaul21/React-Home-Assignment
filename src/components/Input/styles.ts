import styled from "styled-components";

export const StyledInput = styled.input`
  width: 30%;
  padding: 10px;
  font-size: ${({ theme }) => theme.typography.fontSizes.medium};
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 5px;
  outline: none;
  z-index: 100;

  &:focus {
    border-color: ${({ theme }) => theme.colors.secondary};
  }

  @media (max-width: 768px) {
    width: 80%;
  }
  @media (max-width: 480px) {
    width: 90%;
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 16px;
  font-weight: semibold;
  padding: 5px 0;
`;
