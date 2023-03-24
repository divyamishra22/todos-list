
import './App.css';
import Header from "./My Components/Header";        // since,Header is default export therefore, no brackets req.
import { TodoItem } from './My Components/TodoItem';  
import { Todos } from './My Components/Todos';

function App() {

  return (
    <>
    <Header title={"TODOS"}/>
    <Todos/>
    <TodoItem/>
    </>
  );
}


export default App;
