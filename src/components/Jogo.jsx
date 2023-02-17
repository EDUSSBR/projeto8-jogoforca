
import { ForcaImage, RandomWord, RandomWordButtonContainer, BeginButton } from "./shared/JogoItems";
export function Jogo({ isLost, isWon, initialWord, startGame, lifePointsUsed }) {
    return (
        <>
            <ForcaImage data-test="game-image" src={`./assets/forca${lifePointsUsed}.png`} />
            <RandomWordButtonContainer>
                <BeginButton data-test="choose-word" onClick={startGame}>Escolher Palavra</BeginButton>
                <RandomWord data-test="word" isLost={isLost} isWon={isWon} >{initialWord}</RandomWord>
            </RandomWordButtonContainer>
        </>)
};