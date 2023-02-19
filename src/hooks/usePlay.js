import { useState } from "react";
const initialState = {
    chosenWord: 0,
    lifePointsUsed: 0,
    maxLifePoints: 6,
    isDisabledInput: true,
    trackedWordArray: '',
    foundLetterFlag: false,
    won: false,
    lost: false,
    displayMessage: false,
    message: "Please, Save me!!!"
}
const messagesDic = ["", "Please, Save me!!!", "It's hurting 😢", "It's getting heavier broo 😭", "Oh my god!!!", "OH MY GOD, IM GONNA DIE!", "BYE...(silence) 💀", "Thank you so much!!!!  ❤️"]
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
    const resetState = () => ({ ...state, displayMessage: false, message: messagesDic[0], chosenWord: generateWord(), trackedLettersArr: enableLetters(), isDisabledInput: false, lifePointsUsed: 0, won: false, lost: false })
    const [state, setState] = useState({ words: outSideWords, trackedLettersArr: disableLetters(), ...initialState })
    const startGame = () => setState(resetState())
    function tryLetter(letter) {
        let foundLetterFlag = false
        let isNowUsedYet = false

        let newState = {
            ...state,
            
            chosenWord: state.chosenWord.map(item => {
                if (item.value.toLowerCase().replace(/[áàâãä]/g, 'a')
                    .replace(/[éèêë]/g, 'e')
                    .replace(/[íìîï]/g, 'i')
                    .replace(/[óòôõö]/g, 'o')
                    .replace(/[úùûü]/g, 'u')
                    .replace(/[ç]/g, 'c') === letter.toLowerCase()) {
                    foundLetterFlag = true
                    return { ...item, found: true }
                }
                return item
            }),
            trackedLettersArr: state.trackedLettersArr.map((item, index) => {
                if (item.letter.replace(/[ç]/g, 'c').toLowerCase() === letter.replace(/[ç]/g, 'c').toLowerCase() && item.alreadyUsed === true) {
                    isNowUsedYet = true
                    return { ...item, alreadyUsed: false, id: index }
                }
                return item
            }),
        }
        if (!isNowUsedYet) {
            newState = { ...newState, message: "Seriously? try another fast!!" }
            setState(newState)
            return;
        } else if (!foundLetterFlag) {
            newState.lifePointsUsed += 1
            foundLetterFlag = false
            isNowUsedYet = false
            newState.displayMessage=true
        }

        newState.message=messagesDic[newState.lifePointsUsed]
        if (checkLifePoints(state.maxLifePoints, newState.lifePointsUsed)) {
            newState = setLostState(newState)
        } else if (checkMissingLetters(newState)) {
            newState.message = messagesDic[7]
            newState = setWonState(newState)
        }
        setState(newState)
    }
    const tryFinalWord = (word) => {
        const wonOrLost = fullWordCheck(word) ? Object.assign({}, { won: true }) : Object.assign({}, { lost: true, lifePointsUsed: state.maxLifePoints })
        setState({ ...state, chosenWord: setChosenWordToShow(), ...wonOrLost, isDisabledInput: true, trackedLettersArr: disableLetters() })
    }
    return [state, startGame, tryLetter, tryFinalWord]
}