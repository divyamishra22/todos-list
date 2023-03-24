
import './App.css';
import Header from "./My Components/Header";        // since,Header is default export therefore, no brackets req.
//import { TodoItem } from './My Components/TodoItem';  
import { Todos } from './My Components/Todos';

function App() {
 let todos = [
  {
    sno:1,
    title:"Market",
    desc:"Go to Market"
  },
  {
    sno:2,
    title:"Shopping",
    desc:"Go to Shopping"
  },
  {
    sno:3,
    title:"Temple",
    desc:"Go to Temple"
  }
 ]
  return (
    <>
    <Header title={"TODOS"} />
    <Todos todos={todos}/>
    </>
  );
}


export default App;
