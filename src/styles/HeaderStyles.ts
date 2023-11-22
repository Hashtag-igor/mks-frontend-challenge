import styled from "styled-components";
import { FaCartShopping } from "react-icons/fa6";

export const HeaderContainer = styled.header`
  background: #0F52BA;
  width: 100%;
  padding: 15px 0;
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin: auto;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0 6px;
`;

export const Title = styled.h1`
  color: #fff;
`;

export const SecondTitle = styled.span`
  margin-top: 5px;
  color: #fff;
`

export const CartButton = styled.button`
  cursor: pointer;
  border: none;
  background: #fff;
  padding: 8px 20px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CartIcon = styled(FaCartShopping)`

`