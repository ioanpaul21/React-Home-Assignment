import styled from "styled-components";

export const CardContainer = styled.div`
  width: 400px;
  height: fit-content;
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;
`;

export const CardImage = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 94%;
  overflow: hidden;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const CardContent = styled.div`
  padding: 10px;
  text-align: center;
  background-color: #313137;
  line-height: 1.5;
`;

export const FirstName = styled.p`
  margin: 3px 0;
  font-size: 24px;
  font-weight: bold;
  color: #fff;
  opacity: 0.5;
`;

export const LastName = styled.p`
  margin: 5px 0;
  font-size: 20px;
  font-style: italic;
  color: #fff;
`;
