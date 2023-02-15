import { Label, TryButton, KnowTheWordInput, TryContainer } from './shared/ChuteItems'
export function Chute() {
    return (
        <TryContainer>
            <Label>Já sei a palavra!</Label>
            <KnowTheWordInput />
            <TryButton>Chutar</TryButton>
        </TryContainer>)
}