import './App.css';
import Bonuses from './components/Bonuses';
import Snake from './components/Snake';

function App() {
  return (
    <div className="terrain">
      <Snake />
      <Bonuses />
    </div>
  );
}

export default App;
