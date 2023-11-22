import React from 'react';
import { useDispatch } from 'react-redux';
import { IButton } from '../../types/IButton';
import { BagIcon, ButtonComponent } from "../../styles/ButtonStyles";
import { addToCart } from "../../redux/actions/cartActions";

const Button: React.FC<IButton> = ({ product }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(addToCart(product));
  };

  return (
    <ButtonComponent onClick={handleClick}>
      <BagIcon/> COMPRAR
    </ButtonComponent>
  );
};

export default Button;
