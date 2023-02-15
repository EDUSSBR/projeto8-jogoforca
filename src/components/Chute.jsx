import {Label} from './Chute/Label'
import {TryButton} from './Chute/TryButton'
import {KnowTheWordInput} from './Chute/KnowTheWordInput'
import {TryContainer} from './Chute/TryContainer'
export function Chute() {
    return (
        <TryContainer>
            <Label>Já sei a palavra!</Label>
            <KnowTheWordInput />
            <TryButton>Chutar</TryButton>
        </TryContainer>)
}