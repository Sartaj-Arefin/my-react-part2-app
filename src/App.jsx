import './App.css';
import Batsman from './Batsman';
import Counter from './Counter';
function App() {
  function handleClick() {
    alert(`I'm Clicked`);
  }
  return (
    <>
      <h3>Vite + React</h3>
      <Batsman></Batsman>
      <Counter></Counter>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={() => alert(`I'm Clicked 2`)}>Click Me Too</button>
    </>
  );
}

export default App;
