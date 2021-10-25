import './App.css';
import Conversor from './Conversor';

function App() {
  return (
    <div className="App">
      <header>
        <Conversor currency1="BRL" currency2="USD" />
      </header>
    </div>
  );
}

export default App;
