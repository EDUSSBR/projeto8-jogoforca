
import { ForcaImage, RandomWord, RandomWordButtonContainer, BeginButton } from "./shared/JogoItems";
// import { useState } from 'react';

export function Jogo({ isLost, isWon, initialWord, startGame, lifePointsUsed }) {
    return (
        <>
            <ForcaImage src={`./assets/forca${lifePointsUsed}.png`} />
            <RandomWordButtonContainer>
                <BeginButton onClick={startGame}>Escolher Palavra</BeginButton>
                <RandomWord isLost={isLost} isWon={isWon} >{initialWord}</RandomWord>
            </RandomWordButtonContainer>
        </>)
}