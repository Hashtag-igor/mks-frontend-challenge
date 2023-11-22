import styled from "styled-components";

export const CardContainer = styled.div`
    background: #fff; 
    width: 230px;
    height: 330px;
    border: 1px solid #EEEEEE;
    border-radius: 8px 8px 0 0;
    box-shadow: 0px 2px 6px 2px #00000011;

    @media screen and (max-width: 880px) {
        width: 260px;
    }

    @media screen and (max-width: 670px) {
        width: 230px;
    }

    @media screen and (max-width: 560px) {
        width: 340px;
    }

    @media screen and (max-width: 400px) {
        width: 300px;
    }

    @media screen and (max-width: 360px) {
        width: 280px;
    }
`
export const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
    margin: auto;
    text-align: center;
`
export const CardPhoto = styled.img`
    width: 120px; 
    height: 120px;
    margin-top: 14px;
`
export const CardNameAndPriceContainer = styled.div`
    width: 100%; 
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 8px auto;
`
export const CardName = styled.h3`
    width: 67%;
    text-align: left;
    padding-left: 5px;
    margin-right: 9px;
    color: #000000be;
    font-weight: 400;
`
export const CardPrice = styled.h4`
    width: 33%;
    padding: 6px;
    background: #303030;
    padding-right: 3px;
    border-radius: 5px;
    color: #fff;
    font-weight: 700;
    font-size: 17px;
`
export const CardDescription = styled.p`
    text-align: left;
    margin-top: 8px;
`