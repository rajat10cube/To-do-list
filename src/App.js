import './App.css';
import List from './components/List';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <List itemList = {["collect DSA books","buy whiteboard","start studying"]}/>
        <List itemList = {["Get breads","Get eggs","stop studying"]}/>
      </header>
    </div>
  );
}

export default App;
