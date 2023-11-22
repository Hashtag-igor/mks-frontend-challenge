import styled from 'styled-components';
import { TiDelete } from "react-icons/ti";

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 30%;
  height: 900px;
  background: #0F52BA;
  box-shadow: 7px 6px 8px 10px #00317acc;
  border-left: 3px solid #0a4fb8;
  padding: 20px;
  z-index: 1000;

  @media screen and (max-width: 1200px) {
    width: 35%;
  }

  @media screen and (max-width: 1000px) {
    width: 40%;
  }

  @media screen and (max-width: 880px) {
    width: 35%;
  }

  @media screen and (max-width: 650px) {
    width: 45%;
  }

  @media screen and (max-width: 510px) {
    width: 60%;
  }
`;

export const CartWrapper = styled.div`
  margin-top: 40px; 
  max-height: 400px; 
  overflow-Y: auto;

  @media screen and (max-width: 1200px) {
    max-height: 300px;
  }

  @media screen and (max-width: 880px) {
    max-height: 290px;
  }

  @media screen and (max-width: 650px) {
    max-height: 290px;
  }

  @media screen and (max-width: 450px) {
    max-height: 280px;
  }
`

export const CartHeaderContainer = styled.div`
  display: flex; 
  justify-content: space-between; 
  align-items: center; 
  width: 90% ;
  margin: auto;
`
export const CartHeaderTitle = styled.h2`
  font-weight: bolder;
  color: #fff;
`
export const CartMapContainer = styled.div`
  width: 100%;
  margin-bottom: 20px;
`

export const CartCardContainer = styled.div`
  width: 90%; 
  background: #fff; 
  margin: auto; 
  border-radius: 8px; 
  padding: 10px 0; 
  position: relative;
`
export const CartCardWrapper = styled.div`
  width: 95%; 
  margin: auto; 
  display: flex; 
  align-items: center; 
  justify-content: space-between; 
  gap: 0 14px;

  @media screen and (max-width: 880px) {
    flex-direction: column;
    gap: 6px 0;
  }
`
export const CartIMGContainer = styled.div`
`
export const CartIMG = styled.img`
  width: 60px; 
  height: 60px;
`
export const CartName = styled.p`
`
export const CartQuantyContainer = styled.div`
  display: flex;
`
export const LessButton = styled.button`
  border: 1px solid gray; 
  border-right: none;
  border-radius: 4px 0 0 4px; 
  padding: 3px 8px;
  background: white;
`
export const QuantyProduct = styled.div`
  border: 1px solid gray; 
  padding: 3px 8px;
  background: white;
`
export const MoreButton = styled.button`
  border: 1px solid gray; 
  border-radius: 0 4px 4px 0; 
  padding: 3px 8px;
  background: white;
  border-left: none;
`
export const ProductPrice = styled.p`
  margin-right: 5px; 
  font-weight: bolder;
`
export const DeleteProduct = styled.div`
  position: absolute; 
  top: -2px; 
  right: -2px; 
  font-size: 20px;
  cursor: pointer; 
`
export const DeleteIcon = styled(TiDelete)`
`
export const DeleteIconPage = styled(TiDelete)`
  font-size: 46px;
  cursor: pointer;
`

export const CartBuyContainer = styled.div`
  margin-top: 30px; 
  width: 100%;
`
export const CartPriceContainer = styled.div`
  display: flex; 
  align-items: center; 
  justify-content: space-between; 
  padding: 0 20px 0 20px;

  @media screen and (max-width: 400px) {
    padding: 0 7px 0 7px;
  }
`
export const CartTotal = styled.span`
  font-weight: bolder; 
  color: #fff; 
  font-size: 24px;
`
export const CartTotalPrice = styled.span`
  font-weight: bolder; 
  color: #fff; 
  font-size: 24px;
`
export const CartBuyButton = styled.button`
  background: #000; 
  color: #fff; 
  font-size: 24px; 
  font-weight: bolder; 
  border: none; 
  width: 100%; 
  height: 60px; 
  margin-top: 15px;
`