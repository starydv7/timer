
import './App.css';
import Counter from './components/Counter';
import GoogleTimer from './components/GoogleTimer';
import Timer from './components/Timer';

function App() {
  return (
    <div className="App">
      <Timer />
      <GoogleTimer />
      <Counter/>
    </div>
  );
}

export default App;
