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

    function tryLetter(letter) {
        let foundFlag = false
        const newState = {
            ...state,
            chosenWord: state.chosenWord.map(item => {
                if (item.value.toLowerCase() === letter.toLowerCase()) {
    
                    foundFlag = true
                    return { ...item, found: true }
                }
                return item
            }),
            trackedLettersArr: state.trackedLettersArr.map((item, index) => {
                if (item.letter === letter) {
                    return { ...item, alreadyUsed: false, id: index }
                }
                return item
            }),
        }
        if (!foundFlag) {
            newState.lifePointsUsed += 1
            foundFlag = false
        }
        let usedLifePointsSum = state.maxLifePoints === newState.lifePointsUsed
        if (usedLifePointsSum) {
            newState.lost = true
            newState.isDisabledInput= true
            newState.trackedLettersArr = lettersArr.map((letter, index) => ({ letter: letter.toUpperCase(), alreadyUsed: false, id: index }))
            newState.chosenWord = newState.chosenWord.map(letter => ({ ...letter, found: true }))
        }
        let restantes = newState.chosenWord.filter(item => item.found !== true).length
        if (restantes === 0) {
            newState.won=true
            newState.isDisabledInput= true
            newState.trackedLettersArr = lettersArr.map((letter, index) => ({ letter: letter.toUpperCase(), alreadyUsed: false, id: index }))
            
        }
        setState(newState)
    }

    function tryFinalWord(word){
        let newState = {...state}
        newState.chosenWord = newState.chosenWord.map(letter => ({ ...letter, found: true }))
        if (word===newState.chosenWord.map(letter=>letter.value).join("")){
            newState.won=true
        } else {
            newState.lost = true
    
        }
        newState.isDisabledInput= true
        newState.trackedLettersArr = lettersArr.map((letter, index) => ({ letter: letter.toUpperCase(), alreadyUsed: false, id: index }))
        setState(newState)
    }
    return [state, startGame, tryLetter, tryFinalWord]
}