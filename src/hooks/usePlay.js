import { useState } from "react";
const initialState = {
    chosenWord: 0,
    lifePointsUsed: 0,
    maxLifePoints: 6,
    isDisabledInput: true,
    trackedWordArray: '',
    foundFlag: false,
    won: false,
    lost: false
}
export function usePlay(lettersArr, outSideWords) {
    const [state, setState] = useState({
        words: outSideWords,
        trackedLettersArr: lettersArr.map((letter, index) => ({ letter: letter.toUpperCase(), alreadyUsed: false, id: index })),
        ...initialState
    })
    function startGame() {
        const newState = {
            ...state,
            chosenWord: state.words[Math.floor(Math.random() * (state.words.length + 1))].split('').map(letter => ({ value: letter, found: false })),
            trackedLettersArr: state.trackedLettersArr.map((item, index) => ({ letter: item.letter.toUpperCase(), alreadyUsed: true, id: index })),
            isDisabledInput: false,
            lifePointsUsed: 0,
            won: false,
            lost: false
        }
        setState(newState)
        return newState
    }

    return [state, startGame]
}