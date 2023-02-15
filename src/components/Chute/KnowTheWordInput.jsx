import styled from "styled-components"
export const KnowTheWordInput = styled.input`
    margin-left:12px;
    width:353px;
    height: 40px;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
    border-radius: 3px;
    border: 1px solid ${({ theme }) => theme.colors.knowTheWordBorder};
    `