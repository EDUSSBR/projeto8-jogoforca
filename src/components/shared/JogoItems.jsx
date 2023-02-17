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
`
export const ForcaImage = styled.img`
    max-width:400px;
`

export const RandomWord = styled.p`
    font-family: ${({theme})=> theme.fonts.quarentine.fontFamily};
    font-size: ${({theme})=> theme.fonts.quarentine.fontSize};
    line-height: ${({theme})=> theme.fonts.quarentine.lineHeight};
    margin-right:61px;
    color: ${({isWon, isLost})=> {
        if (isLost) return 'red';
        if (isWon) return 'green';
    }}
`
export const RandomWordButtonContainer = styled.div`
    width: 100%;
    display:flex;
    flex-direction:column;
    align-items:flex-end;
    justify-content:space-between
`