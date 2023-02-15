import initialImage from '../assets/forca0.png'
import { ForcaImage } from "./Jogo/ForcaImage";
import { RandomWord } from "./Jogo/RandomWord";
import { RandomWordButtonContainer } from "./Jogo/RandomWordButtonContainer";
import { BeginButton } from "./Jogo/BeginButton";

export function Jogo({src=initialImage, initialWord}) {
    return (
        <>
        <ForcaImage src={src} /> 
        <RandomWordButtonContainer>
            <BeginButton>Escolher Palavra</BeginButton>
            <RandomWord>{initialWord}</RandomWord>
        </RandomWordButtonContainer>
        </>)
}