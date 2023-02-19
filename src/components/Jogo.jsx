import { ImageContainer, MessageImg, MessageText, ForcaImage, RandomWord, RandomWordButtonContainer, BeginButton } from "./shared/JogoItems";

export function Jogo({ isLost, isWon, initialWord, startGame, lifePointsUsed, message="Please, Save me!!!",displayMessage }) {
    return (
        <>
            <ImageContainer>
                <ForcaImage data-test="game-image" src={`./assets/forca${lifePointsUsed}.png`} />
                {displayMessage && <MessageImg src={"./assets/dialogue.jpeg"} />}
                {displayMessage && <MessageText>{message}</MessageText>}
            </ImageContainer>
            <RandomWordButtonContainer>
                <BeginButton data-test="choose-word" onClick={startGame}>Escolher Palavra</BeginButton>
                <RandomWord data-test="word" isLost={isLost} isWon={isWon} >{initialWord}</RandomWord>
            </RandomWordButtonContainer>
        </>)
};