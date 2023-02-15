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