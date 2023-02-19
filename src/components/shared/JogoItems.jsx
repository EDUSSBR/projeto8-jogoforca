import styled from "styled-components"

export const BeginButton = styled.button`
    border-radius: 8px;
    width:200px;
    height:60px;
    background-color: ${({ theme }) => theme.colors.RandomWordButtonBg};
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fonts.beginButton.fontSize};
    line-height: ${({ theme }) => theme.fonts.beginButton.lineHeight};
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
    font-family: ${({ theme }) => theme.fonts.quarentine.fontFamily};
    font-size: ${({ theme }) => theme.fonts.quarentine.fontSize};
    line-height: ${({ theme }) => theme.fonts.quarentine.lineHeight};
    margin-right:61px;
    color: ${({ isWon, isLost }) => {
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

export const MessageImg = styled.img`
    position:absolute;
    width: 120px;
    top:calc(91px);
    right:calc(-97px);    
    @media (max-width: 639px){
        width: 25%;
        top:calc(21%);
        right:calc( -19% );

    }
    @media (max-width:380px) {
        display:none;
    }
    `
export const MessageText = styled.p`
    position:absolute;
    width: 100px;
    top:calc(110px);
    right:calc(-89px);
    text-align:center;
    @media (max-width: 639px){
        font-size:16px;
        width: 18%;
        top:calc(22% + 5px);
        right:calc( -16% );
    }
    @media (max-width: 470px){
        font-size:12px;

    }
    @media (max-width:380px) {
        display:none;
    }

`
export const ImageContainer = styled.div`
    position:relative;
`