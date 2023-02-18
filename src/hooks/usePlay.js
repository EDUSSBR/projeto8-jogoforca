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
    const disableLetters = () => lettersArr.map((letter, index) => ({ letter: letter.toUpperCase(), alreadyUsed: false, id: index }))
    const enableLetters = () => lettersArr.map((letter, index) => ({ letter: letter.toUpperCase(), alreadyUsed: true, id: index }))
    const generateWord = () => state.words[Math.floor(Math.random() * (state.words.length + 1))].split('').map(letter => ({ value: letter, found: false }))
    const fullWordCheck = (word) => (word.replace(/[áàâãä]/g, 'a')
    .replace(/[éèêë]/g, 'e')
    .replace(/[íìîï]/g, 'i')
    .replace(/[óòôõö]/g, 'o')
    .replace(/[úùûü]/g, 'u')
    .replace(/[ç]/g, 'c').toLowerCase() === state.chosenWord.map(letter => letter.value).join("")
    .replace(/[áàâãä]/g, 'a')
    .replace(/[éèêë]/g, 'e')
    .replace(/[íìîï]/g, 'i')
    .replace(/[óòôõö]/g, 'o')
    .replace(/[úùûü]/g, 'u')
    .replace(/[ç]/g, 'c').toLowerCase()) ? true : false
    const setChosenWordToShow = () => state.chosenWord.map(letter => ({ ...letter, found: true }))
    const checkLifePoints = (points, maxLifePoints) => (maxLifePoints === points ? true : false)
    const setLostState = (state) => ({ ...state, lost: true, isDisabledInput: true, trackedLettersArr: disableLetters(), chosenWord: setChosenWordToShow() })
    const checkMissingLetters = (state) => (state.chosenWord.filter(item => item.found !== true).length === 0)
    const setWonState = (state) => ({ ...state, won: true, isDisabledInput: true, trackedLettersArr: disableLetters() })
    const resetState = () => ({ ...state, chosenWord: generateWord(), trackedLettersArr: enableLetters(), isDisabledInput: false, lifePointsUsed: 0, won: false, lost: false })
    const [state, setState] = useState({words: outSideWords, trackedLettersArr: disableLetters(), ...initialState})
    const startGame = () => setState(resetState())
    function tryLetter(letter) {
        let foundFlag = false
        let newState = {
            ...state,
            chosenWord: state.chosenWord.map(item => {
                if (item.value.toLowerCase().replace(/[áàâãä]/g, 'a')
                .replace(/[éèêë]/g, 'e')
                .replace(/[íìîï]/g, 'i')
                .replace(/[óòôõö]/g, 'o')
                .replace(/[úùûü]/g, 'u')
                .replace(/[ç]/g, 'c') === letter.toLowerCase()) {
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
        if (checkLifePoints(state.maxLifePoints, newState.lifePointsUsed)) {
            newState = setLostState(newState)
        }
        if (checkMissingLetters(newState)) {
            newState = setWonState(newState)
        }
        setState(newState)
    }
    const tryFinalWord = (word) => {
        const wonOrLost = fullWordCheck(word) ? Object.assign({},{won:true}) : Object.assign({},{lost:true, lifePointsUsed: state.maxLifePoints})
        setState({...state, chosenWord: setChosenWordToShow(), ...wonOrLost, isDisabledInput:true, trackedLettersArr: disableLetters()})
    }
    return [state, startGame, tryLetter, tryFinalWord]
}