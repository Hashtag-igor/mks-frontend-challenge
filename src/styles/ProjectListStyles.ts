import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
`
export const Wrapper = styled.div`
    display: flex;
    align-items: center; 
    justify-content: space-evenly; 
    flex-wrap: wrap; 
    margin: 80px auto 100px auto; 
    gap: 24px 0; 
    width: 75%;

    @media screen and (max-width: 1024px) {
        width: 85%;
    }

    @media screen and (max-width: 880px) {
        width: 85%;
    }

    @media screen and (max-width: 670px) {
        width: 90%;
    }

    @media screen and (max-width: 560px) {
        width: 90%;
    }
`