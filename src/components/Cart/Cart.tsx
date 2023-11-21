// components/Cart/Cart.tsx
import React from 'react';
import { useSelector } from 'react-redux';
import { ICart } from '../../types/ICart';
import { RootState } from '../../redux/store';

const Cart: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const expanded = false; // Assumindo que você controla a expansão de alguma maneira

  return (
    <div>
      <span role="img" aria-label="carrinho">
        🛒 {cartItems.length > 0 && <span>{cartItems.length}</span>}
      </span>
      {expanded && (
        <div className="cart-expanded">
          {cartItems.map((item: ICart) => (
            <div key={item.id}>{item.name}</div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
