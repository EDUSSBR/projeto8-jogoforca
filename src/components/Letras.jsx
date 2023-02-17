import styled from "styled-components";

const Button = styled.button`
        background-color: ${({ theme }) => theme.colors.lettersBtnBgEnabled};
        color: ${({ theme }) => theme.colors.lettersBtnColorEnabled};
        border: 1px solid ${({ theme }) => theme.colors.lettersBtnBorder};
        width: 40px;
        height: 40px;
    &:disabled{
        background-color: ${({ theme }) => theme.colors.lettersBtnBgDisabled};
        color: ${({ theme }) => theme.colors.lettersBtnColorDisabled};
    }

`;

export function Letras({ letter, isDisabled = true, tryLetter }) {
    return (
        <>
            <Button data-test="letter" onClick={tryLetter} disabled={isDisabled}>{letter}</Button>
        </>);
}


