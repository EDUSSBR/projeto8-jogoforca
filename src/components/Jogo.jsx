import initialImage from '../assets/forca0.png'
import { ForcaImage, RandomWord, RandomWordButtonContainer, BeginButton } from "./shared/JogoItems";

export function Jogo({ src = initialImage, initialWord }) {
    return (
        <>
            <ForcaImage src={src} />
            <RandomWordButtonContainer>
                <BeginButton>Escolher Palavra</BeginButton>
                <RandomWord>{initialWord}</RandomWord>
            </RandomWordButtonContainer>
        </>)
}