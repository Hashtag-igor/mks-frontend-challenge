import styled from 'styled-components';
import { TiDelete } from "react-icons/ti";
import { AiOutlineShoppingCart } from "react-icons/ai";


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

  //width
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

  //height
  @media screen and (min-height: 881px) {
    height: 810px;
  } 
  @media screen and (max-height: 880px) {
    height: 810px;
  } 
  @media screen and (max-height: 700px) {
    height: 700px;
  }
  @media screen and (max-height: 569px) {
    height: 600px;
  }
  @media screen and (max-height: 450px) {
    height: 500px;
  }
`;

export const CartWrapper = styled.div`
  margin-top: 40px; 
  max-height: 400px; 
  overflow-Y: auto;
  
  //width
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

  //height
  @media screen and (min-height: 881px) {
    max-height: 570px;
  }
  @media screen and (max-height: 880px) {
    max-height: 570px;
  }
  @media screen and (max-height: 830px) {
    max-height: 530px;
  }
  @media screen and (max-height: 790px) {
    max-height: 495px;
  }
  @media screen and (max-height: 760px) {
    max-height: 460px;
  }
  @media screen and (max-height: 730px) {
    max-height: 430px;
  }
  @media screen and (max-height: 690px) {
    max-height: 400px;
  }
  @media screen and (max-height: 660px) {
    max-height: 370px;
  }
  @media screen and (max-height: 630px) {
    max-height: 350px;
  }
  @media screen and (max-height: 610px) {
    max-height: 330px;
  }
  @media screen and (max-height: 580px) {
    max-height: 300px;
  }
  @media screen and (max-height: 540px) {
    max-height: 270px;
  }
  @media screen and (max-height: 510px) {
    max-height: 260px;
  }
`

export const CartHeaderContainer = styled.div`
  display: flex; 
  justify-content: space-between; 
  align-items: center; 
  width: 90% ;
  margin: auto;

  @media screen and (max-width: 800px) {
    width: 100%;
  }

`
export const CartHeaderTitleContainer = styled.div`
  display: flex; 
  align-items: center; 
  gap: 0 12px;
`
export const CartHeaderTitle = styled.h2`
  font-weight: bolder;
  color: #fff;

  @media screen and (max-width: 400px) {
    font-size: 22px;
  }

  @media screen and (max-height: 510px) {
    font-size: 24px;
  }
`
export const CartIconTitle = styled(AiOutlineShoppingCart)`
  font-size: 28px;
  
  @media screen and (max-width: 400px) {
    font-size: 24px;
  }

  @media screen and (max-height: 510px) {
    font-size: 20px;
  }
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

  @media screen and (max-height: 510px) {
    padding: 5px 0;
  }
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
  padding: 3px 12px;
  background: white;
  border: none;
  font-size: 16px;

  @media screen and (max-width: 880px) {
    font-size: 22px;
  }
`
export const QuantyProduct = styled.div`
  padding: 3px 12px;
  background: white;
  border: none;
  font-size: 16px;

  @media screen and (max-width: 880px) {
    font-size: 20px;
  }
`
export const MoreButton = styled.button`
  border: none;
  padding: 3px 12px;
  background: white;
  font-size: 16px;

  @media screen and (max-width: 880px) {
    font-size: 22px;
  }
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
  font-size: 28px;
  cursor: pointer;

  @media screen and (max-width: 880px) {
    font-size: 34px;
  }
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
    padding: 0 5px 0 5px;
  }
`
export const CartTotal = styled.span`
  font-weight: bolder; 
  color: #fff; 
  font-size: 24px;

  @media screen and (max-height: 600px) {
    font-size: 20px;
  }
`
export const CartTotalPrice = styled.span`
  font-weight: bolder; 
  color: #fff; 
  font-size: 24px;

  @media screen and (max-height: 600px) {
    font-size: 20px;
  }
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

  @media screen and (max-height: 600px) {
    height: 50px;
    font-size: 20px;
  }

  @media screen and (max-height: 510px) {
    height: 50px;
    font-size: 18px;
  }

  @media screen and (max-width: 400px) {
    font-size: 17px;
    letter-spacing: 1px;
  }
`