import styled from "styled-components";
import { FiShoppingBag } from "react-icons/fi";


export const ButtonComponent = styled.button`
    background: #0F52BA; 
    color: white; 
    border-radius: 0 0 8px 8px; 
    border: none; 
    width: 100%;
    padding: 10px 0;
    font-weight: bolder;
    font-size: 15px;
`
export const BagIcon = styled(FiShoppingBag)`
    margin-right: 3px;
`