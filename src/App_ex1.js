import Todo from "./components/Todo";

/**
 *
 * JSX를 반환하는 함수.
 */
function App() {
  return (
    <>
      <h1>My Todos</h1>
      <Todo text="Learn React"/>
      <Todo text="Master React"/>
      <Todo text="Explore the full React course"/>
    </>
  );
}

export default App;
