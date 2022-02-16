import './App.css';

import TodoItem from './components/TodoItem';

function App() { // En funktionell komponent i React måste starta med stor bokstav
  const title = 'Todo App';

  return (
    <div className="App">
      <h1>{ title }!</h1>
      <ul>
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </ul>
    </div>
  );
}

export default App;
