import Todo from './components/Todo';

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text="Learn React" />
      <Todo text="Review HTML" />
      <Todo text="Review CSS"/>
    </div>
  );
}

export default App;
