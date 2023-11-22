// Header.tsx
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Cart from '../Cart/Cart';
import { ICart } from '@/types/ICart';
import { RootState } from '@/redux/store';
import { CartButton, HeaderContainer, HeaderContent, LogoContainer, Title, CartIcon, SecondTitle, QuantyProducts } from '../../styles/HeaderStyles';
import { addToCart, removeCartItem, updateCartItemCount } from '../../redux/actions/cartActions';

const Header: React.FC = () => {
  const [showCart, setShowCart] = useState(false);
  const itemCount = useSelector((state: RootState) => state.cart.itemCount);
  const dispatch = useDispatch();

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  const handleAddToCart = (product: ICart) => {
    dispatch(addToCart(product));
    dispatch(updateCartItemCount());
  };  

  const handleRemoveFromCart = (productId: string) => {
    dispatch(removeCartItem(productId));
    dispatch(updateCartItemCount());
  };

  return (
    <HeaderContainer>
      <HeaderContent>
        <LogoContainer aria-label="nome da empresa">
          <Title>MKS</Title>
          <SecondTitle>Sistemas</SecondTitle>
        </LogoContainer>
        <CartButton onClick={toggleCart}>
          <CartIcon aria-label="carrinho" />
          <QuantyProducts>{itemCount}</QuantyProducts>
        </CartButton>
        {showCart && <Cart toggleCart={toggleCart} />}
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
