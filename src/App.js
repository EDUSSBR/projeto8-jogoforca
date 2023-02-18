import { Letras } from './components/Letras';
import { LetrasContainer } from './components/LetrasContainer';
import { Jogo } from './components/Jogo';
import { JogoContainer } from './components/JogoContainer';
import { Chute } from './components/Chute';
import palavras from './palavras';
import { usePlay } from './hooks/usePlay';
import { useEffect, useRef } from 'react';
import styled from 'styled-components';
const AppContainer = styled.div`
  width:100%;
  height:100%;
  @media (max-width:600px){
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
  }
`
function App() {
  const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  const [state, startGame, tryLetter, tryFinalWord] = usePlay(alfabeto, palavras);
  console.clear()
  console.log("for you to know the word is: ", state.chosenWord !== 0 && state.chosenWord.map(word => word.value).join(""))
  function keyHandler(event) {
    tryLetter(event.key)
  }
  useEffect(() => {
    if (state.chosenWord !== 0) {
      window.addEventListener('keydown', keyHandler)
    } else {
      return
    }
    return () => window.removeEventListener('keydown', keyHandler)
  }, [state.chosenWord])
  return (
    <AppContainer>
      <JogoContainer>
        <Jogo
          isWon={state.won}
          isLost={state.lost}
          lifePointsUsed={state.lifePointsUsed}
          initialWord={state.chosenWord.length > 0 ? state.chosenWord.map(item => item.found ? item.value : "_").join(" ") : ""}
          startGame={startGame}
        />
      </JogoContainer>
      <LetrasContainer>
        {state.trackedLettersArr.map((item) =>
          <Letras
            key={item.id}
            tryLetter={() => tryLetter(item.letter)}
            letter={item.letter}
            isDisabled={!(item.alreadyUsed)}
          />)}
      </LetrasContainer>
      <Chute keyHandler={keyHandler}
      tryFinalWord={tryFinalWord} isDisabled={state.isDisabledInput} />
    </AppContainer>
  );
}

export default App;
