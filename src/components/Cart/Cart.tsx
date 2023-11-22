import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ICart } from '../../types/ICart';
import { RootState } from '../../redux/store';
import { updateCartItem, removeCartItem,updateCartItemCount } from '../../redux/actions/cartActions';
import { CartBuyButton, CartBuyContainer, CartCardContainer, CartCardWrapper, CartContainer, CartHeaderContainer, CartHeaderTitle, CartHeaderTitleContainer, CartIMG, CartIMGContainer, 
         CartIconTitle, 
         CartMapContainer, CartName, CartPriceContainer, CartQuantyContainer, CartTotal, CartTotalPrice, CartWrapper, DeleteIcon, DeleteIconPage, DeleteProduct, LessButton, 
         MoreButton, ProductPrice, QuantyProduct } from "../../styles/CartStyles";

interface CartProps {
  toggleCart: () => void;
}

const Cart: React.FC<CartProps> = ({ toggleCart }) => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const [itemQuantities, setItemQuantities] = useState<{ [key: string]: number }>({});
  const [totalPrice, setTotalPrice] = useState(0);
  const expanded = false;
  const dispatch = useDispatch();

  useEffect(() => {
    const initialQuantities: { [key: string]: number } = {};
    cartItems.forEach((item) => {
      setItemQuantities((prevQuantities) => ({
        ...prevQuantities,
        [item.id]: prevQuantities[item.id] || 1,
      }));
    });
  }, [cartItems]);
  

  useEffect(() => {
    const total = cartItems.reduce((acc, item) => {
      const quantity = itemQuantities[item.id] || 0;
      const itemPrice = parseFloat(item.price.replace(',', '.')) * quantity;
      return acc + itemPrice;
    }, 0);
    setTotalPrice(total);
  }, [itemQuantities, cartItems]);
  

  const closeCart = () => {
    toggleCart();
  };

  const increaseQuantity = (itemId: string) => {
    const currentQuantity = itemQuantities[itemId] || 0;
    setItemQuantities((prevQuantities) => ({
      ...prevQuantities,
      [itemId]: currentQuantity + 1,
    }));
    dispatch(updateCartItem(itemId, currentQuantity + 1));
  };
  
  const decreaseQuantity = (itemId: string) => {
    if (itemQuantities[itemId] && itemQuantities[itemId] > 1) {
      setItemQuantities((prevQuantities) => ({
        ...prevQuantities,
        [itemId]: prevQuantities[itemId] - 1,
      }));
      dispatch(updateCartItem(itemId, itemQuantities[itemId] - 1));
    } else {
      dispatch(removeCartItem(itemId));
      dispatch(updateCartItemCount());
  
      setItemQuantities((prevQuantities) => ({
        ...prevQuantities,
        [itemId]: 0, 
      }));
    }
  };
  

  const removeItem = (itemId: string) => {
    dispatch(removeCartItem(itemId));
  };


  return (
    <CartContainer>
      <CartHeaderContainer>
        <CartHeaderTitleContainer>
          <CartIconTitle />
          <CartHeaderTitle>Carrinho</CartHeaderTitle>
        </CartHeaderTitleContainer>
        <DeleteIconPage onClick={closeCart}></DeleteIconPage>
      </CartHeaderContainer>

      {cartItems.length > 0 && (
        <CartWrapper className="cart-expanded">
          {cartItems.map((item: ICart) => (
            <CartMapContainer key={item.id}>
              <CartCardContainer>
                <CartCardWrapper>
                  <CartIMGContainer>
                    <CartIMG src={item.photo} alt="" />
                  </CartIMGContainer>
                  <CartName>{item.name}</CartName>
                  <CartQuantyContainer>
                    <LessButton onClick={() => decreaseQuantity(item.id)}>-</LessButton>
                    <QuantyProduct>{itemQuantities[item.id] || 0}</QuantyProduct>
                    <MoreButton onClick={() => increaseQuantity(item.id)}>+</MoreButton>
                  </CartQuantyContainer>
                  <ProductPrice>
                    R${(parseFloat(item.price.replace(',', '.')) * (itemQuantities[item.id] || 1)).toFixed(2).replace(/\.?0*$/, '')}
                  </ProductPrice>
                  
                  <DeleteProduct onClick={() => removeItem(item.id)}>
                    <DeleteIcon />
                  </DeleteProduct>
                </CartCardWrapper>
              </CartCardContainer>
            </CartMapContainer>
          ))}
        </CartWrapper>
      )}

      <CartBuyContainer>
        <CartPriceContainer>
          <CartTotal>Total</CartTotal>
          <CartTotalPrice>R${totalPrice.toFixed(2).replace(/\.?0*$/, '')}</CartTotalPrice>
        </CartPriceContainer>
        <CartBuyButton style={{cursor: cartItems.length < 1 ? "not-allowed" : "pointer" }}
          disabled={cartItems.length < 1}>
            FINALIZAR
        </CartBuyButton>
      </CartBuyContainer>
    </CartContainer>
  );
};

export default Cart;
