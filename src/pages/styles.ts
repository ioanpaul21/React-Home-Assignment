import styled from "styled-components";

export const PageWrapper = styled.article`
  width: 100%;
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.background};
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing.large};
  box-sizing: border-box;
  // background: #191920;
  background: black;


  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url("/background.png");
    background-size: cover;
    background-position: top;
    opacity: 0.1; /* Adjust the transparency */
    z-index: 0;
`;
