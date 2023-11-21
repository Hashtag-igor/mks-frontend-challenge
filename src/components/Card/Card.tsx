// components/Card/Card.tsx
import React from 'react';
import { ICard } from '../../types/ICard';

const Card: React.FC<ICard> = ({ name, photo, description, price }) => {
  const formattedPrice = price.replace(/\.?0*$/, '');

  return (
    <div style={{ width: '230px', height: '350px', border: '2px solid #EEEEEE', borderBottom: "none", borderRadius: '8px 8px 0 0' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '90%', margin: 'auto', textAlign: 'center' }}>
        <img style={{ width: '120px', height: '120px', marginTop: "14px" }} src={photo} alt={`Imagem de ${name}`} />
        <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', margin: 'auto' }}>
          <h3 style={{ width: "70%", textAlign: 'left', paddingLeft: '5px', marginRight: "3px" }}>{name}</h3>
          <h4 style={{ width: "30%", padding: "6px", background: 'gray', paddingRight: '3px', borderRadius: "5px" }}>R$ {formattedPrice}</h4>
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
