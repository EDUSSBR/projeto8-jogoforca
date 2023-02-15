import { Letras } from './components/Letras';
import { LetrasContainer } from './components/LetrasContainer'
function App() {
  const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  return (<>
      <LetrasContainer>
      {alfabeto.map(letter => <Letras letter={letter} />)}
    </LetrasContainer>
  </>
  );
}

export default App;
