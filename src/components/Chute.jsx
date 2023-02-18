import { useRef } from 'react';
import { Label, TryButton, KnowTheWordInput, TryContainer, Form } from './shared/ChuteItems';
export function Chute({tryFinalWord, isDisabled, keyHandler }) {
    const inputRef = useRef();
    return (
        <TryContainer>
            <Label>Já sei a palavra!</Label>
            <Form  onFocus={()=>{
        window.removeEventListener('keydown', keyHandler)
      }} onBlur={()=>{
        window.addEventListener('keydown', keyHandler)
      }} onSubmit={(e)=>e.preventDefault()}>
            <KnowTheWordInput data-test="guess-input" ref={inputRef} disabled={isDisabled}/>
            <TryButton data-test="guess-button" onClick={()=>{
                tryFinalWord(inputRef.current.value);
                inputRef.current.value='';
                }} disabled={isDisabled}>Chutar</TryButton>
                </Form>
        </TryContainer>);
};