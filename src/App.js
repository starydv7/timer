
import './App.css';
import Counter from './components/Counter';
import Counter2 from './components/Counter2';
import GoogleTimer from './components/GoogleTimer';
import Timer from './components/Timer';

function App() {
  return (
    <div className="App">
      <Timer />
      <GoogleTimer />
      <Counter />
      <Counter2/>
    </div>
  );
}

export default App;
