
import './App.css';
import TreeView from './TreeView';
import datas from './datas';

function App() {
  return (
    <div className="App">
      <TreeView datas = {datas} />
    </div>
  );
}

export default App;
