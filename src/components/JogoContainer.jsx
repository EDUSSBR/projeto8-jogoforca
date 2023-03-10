import styled from "styled-components";

export const JogoContainer = styled.div`
    width:100%;
    max-width:1025px;
    height: 525.67px;
    padding: 59px 53px 0 38px;
    display:flex;
    margin: 0 auto;
    @media (max-width: 710px){
        height:100%;
        align-items:center;
        justify-content:center;
        flex-wrap:wrap;
    }
`;