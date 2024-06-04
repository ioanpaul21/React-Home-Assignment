import {
  CardContainer,
  CardImage,
  CardContent,
  FirstName,
  LastName,
} from "./styles";

export type CardProps = {
  image: string;
  firstName: string;
  lastName: string;
};

const Card: React.FC<CardProps> = ({ image, firstName, lastName }) => {
  return (
    <CardContainer>
      <CardImage>
        <img src={image} alt={`${firstName} ${lastName}`} />
      </CardImage>
      <CardContent>
        <FirstName>{firstName}</FirstName>
        <LastName>{lastName}</LastName>
      </CardContent>
    </CardContainer>
  );
};

export default Card;
