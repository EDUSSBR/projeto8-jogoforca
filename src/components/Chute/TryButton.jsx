import styled from "styled-components"
export const TryButton = styled.button`
    margin-left:15px;
    width:100px;
    height: 40px;
    border-radius: 3px;
    color: ${({ theme }) => theme.colors.tryWordColor};
    background-color: ${({ theme }) => theme.colors.tryWordBg};
    border: 1px solid ${({ theme }) => theme.colors.tryWordBorder};

`