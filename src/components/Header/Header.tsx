// components/Header/Header.tsx
import React, { useState } from 'react';
import Cart from '../Cart/Cart'; // Importe o componente Cart

const Header: React.FC = () => {
  const [showCart, setShowCart] = useState(false);

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  return (
    <header style={{ background: '#0F52BA', width: '100%' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '90%', margin: 'auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0 6px' }} aria-label="nome da empresa">
          <h1>MKS</h1><span style={{marginTop: "7px"}}>Sistemas</span>
        </div>
        <Cart />
      </div>
    </header>
  );
};

export default Header;
