// components/Header/Header.tsx
import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { CartButton, HeaderContainer, HeaderContent, LogoContainer, Title, CartIcon, SecondTitle } from "../../styles/HeaderStyles"

const Header: React.FC = () => {
  const [showCart, setShowCart] = useState(false);

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  return (
    <HeaderContainer>
      <HeaderContent>
        <LogoContainer aria-label="nome da empresa">
          <Title>MKS</Title>
          <SecondTitle>Sistemas</SecondTitle>
        </LogoContainer>
        <CartButton onClick={toggleCart}>
          <CartIcon aria-label="carrinho"/>
        </CartButton>
        {showCart && <Cart toggleCart={toggleCart} />}
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
