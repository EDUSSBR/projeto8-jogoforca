import { Letras } from './components/Letras';
import { LetrasContainer } from './components/LetrasContainer'
import { Jogo } from './components/Jogo'
import { JogoContainer } from './components/JogoContainer';
import { Chute } from './components/Chute';
import palavras from './palavras'
import { usePlay } from './hooks/usePlay';
function App() {
  const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  const [ state, startGame, tryLetter] = usePlay(alfabeto, palavras)
  return (
    <>
      <JogoContainer>
        <Jogo  isWon={state.won} isLost={state.lost} lifePointsUsed={state.lifePointsUsed} initialWord={state.chosenWord.length>0 ? state.chosenWord.map(item => item.found ? item.value : "_").join(" "): ""} startGame={startGame} />
      </JogoContainer>
      <LetrasContainer>
        {state.trackedLettersArr.map((item) => <Letras key={item.id} tryLetter={()=>tryLetter(item.letter)} letter={item.letter} isDisabled={!(item.alreadyUsed)}/>)}
      </LetrasContainer>
      <Chute isDisabled={state.isDisabledInput}/>
    </>
  );
}

export default App;
