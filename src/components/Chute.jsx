import { useRef } from 'react';
import { Label, TryButton, KnowTheWordInput, TryContainer } from './shared/ChuteItems';
export function Chute({tryFinalWord, isDisabled }) {
    const inputRef = useRef();
    return (
        <TryContainer>
            <Label>Já sei a palavra!</Label>
            <form onSubmit={(e)=>e.preventDefault()}>
            <KnowTheWordInput data-test="guess-input" ref={inputRef} disabled={isDisabled}/>
            <TryButton data-test="guess-button" onClick={()=>{
                tryFinalWord(inputRef.current.value);
                inputRef.current.value='';
                }} disabled={isDisabled}>Chutar</TryButton>
                </form>
        </TryContainer>);
};