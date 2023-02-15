import styled from "styled-components"

export const KnowTheWordInput = styled.input`
    margin-left:12px;
    width:353px;
    height: 40px;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
    border-radius: 3px;
    border: 1px solid ${({ theme }) => theme.colors.knowTheWordBorder};
    `

export const Label = styled.label`
font-weight: ${({ theme }) => theme.fonts.tryWordLabel.fontWeight};
font-size: ${({ theme }) => theme.fonts.tryWordLabel.fontSize};
line-height: ${({ theme }) => theme.fonts.tryWordLabel.lineHeight};

`
export const TryButton = styled.button`
    margin-left:15px;
    width:100px;
    height: 40px;
    border-radius: 3px;
    color: ${({ theme }) => theme.colors.tryWordColor};
    background-color: ${({ theme }) => theme.colors.tryWordBg};
    border: 1px solid ${({ theme }) => theme.colors.tryWordBorder};

`

export const TryContainer = styled.div`
    margin-top: 56px;
    display:flex;
    justify-content:center;
    margin-bottom: 30px;

`