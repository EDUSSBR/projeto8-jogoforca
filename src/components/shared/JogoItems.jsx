import styled from "styled-components"

export  const BeginButton = styled.button`
    border-radius: 8px;
    width:200px;
    height:60px;
    background-color: ${({theme})=> theme.colors.RandomWordButtonBg};
    color: ${({theme})=> theme.colors.white};
    font-size: ${({theme}) => theme.fonts.beginButton.fontSize};
    line-height: ${({theme}) => theme.fonts.beginButton.lineHeight};
    border: 0px solid transparent;
    margin-left: auto;
    margin-top:30px;
    @media (max-width: 710px){

        margin: 20px auto 10px auto;
    }
    @media (max-width: 500px){

        height:45px;
    }
`
export const ForcaImage = styled.img`
    max-width:400px;
    @media (max-width: 710px){
        width:100%;
        margin: 0 auto;
    }
`

export const RandomWord = styled.p`
    font-family: ${({theme})=> theme.fonts.quarentine.fontFamily};
    font-size: ${({theme})=> theme.fonts.quarentine.fontSize};
    line-height: ${({theme})=> theme.fonts.quarentine.lineHeight};
    margin-right:61px;
    color: ${({isWon, isLost})=> {
        if (isLost) return 'red';
        if (isWon) return 'green';
    }};
    @media (max-width: 710px){
        margin: 0 auto;
        font-size: 30px;
    }
`
export const RandomWordButtonContainer = styled.div`
    width: 100%;
    display:flex;
    flex-direction:column;
    align-items:flex-end;
    justify-content:space-between;
    @media (max-width: 710px){
        align-items:center;
        justify-content:center;
        flex-wrap:wrap;
    }

`