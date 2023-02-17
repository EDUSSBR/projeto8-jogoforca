import { useRef } from 'react'
import { Label, TryButton, KnowTheWordInput, TryContainer } from './shared/ChuteItems'
export function Chute({tryFinalWord, isDisabled }) {
    const inputRef = useRef()
    return (
        <TryContainer>
            <Label>Já sei a palavra!</Label>
            <KnowTheWordInput ref={inputRef} disabled={isDisabled}/>
            <TryButton onClick={()=>{
                tryFinalWord(inputRef.current.value)
                inputRef.current.value=''
                }} disabled={isDisabled}>Chutar</TryButton>
        </TryContainer>)
}