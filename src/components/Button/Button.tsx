import React from 'react';
import { useDispatch } from 'react-redux';
import { IButton } from '../../types/IButton';
import { addToCart } from '../../redux/actions/cartActions';

const Button: React.FC<IButton> = ({ product }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(addToCart(product));
  };

  return (
    <button style={{background: "#0F52BA", color: "white", borderRadius: "0 0 8px 8px", border: "none", width: "100%", padding: "10px 0"}} onClick={handleClick}>
      COMPRAR
    </button>
  );
};

export default Button;
