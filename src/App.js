import { Letras } from './components/Letras';
import { LetrasContainer } from './components/LetrasContainer'
import { Jogo } from './components/Jogo'
import { JogoContainer } from './components/JogoContainer';
function App() {
  const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  
  return (<>
      <JogoContainer>
      <Jogo initialWord={"HEHE"}/>
      </JogoContainer>
      <LetrasContainer>
        {alfabeto.map((letter, index) => <Letras key={Object.keys(alfabeto)[index]} letter={letter} />)}
      </LetrasContainer>
    </>
    );
}

    export default App;
