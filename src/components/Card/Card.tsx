// components/Card/Card.tsx
import React from 'react';
import { ICard } from '../../types/ICard';
import { CardContainer, CardDescription, CardName, CardNameAndPriceContainer, CardPhoto, CardPrice, CardWrapper  } from "../../styles/CardStyles"

const Card: React.FC<ICard> = ({ name, photo, description, price }) => {
  const formattedPrice = price.replace(/\.?0*$/, '');

  return (
    <CardContainer>
      <CardWrapper>
        <CardPhoto src={photo} alt={`Imagem de ${name}`} />
        <CardNameAndPriceContainer>
          <CardName>{name}</CardName>
          <CardPrice>R${formattedPrice}</CardPrice>
        </CardNameAndPriceContainer>
        <CardDescription>{description}</CardDescription>
      </CardWrapper>
    </CardContainer>
  );
};

export default Card;
