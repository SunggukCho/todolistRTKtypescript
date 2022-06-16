import './App.css';
import { useEffect, useRef, useState, useReducer } from 'react';

interface Todo {
  id: number;
  value: string;
  done: boolean;
}

const ADD = "ADD";
const DELETE = "DELETE";
const TOGGLE = "TOGGLE";

function reducer (state: any, action: any) {
  switch (action.type) {
    case ADD:
      return state.concat(action.todo)
    case DELETE:
      return state.filter((todo: Todo) => todo.id !== action.todo.id)
    case TOGGLE:
      return action.todos
    default:
      return
  }
}

const initialState: Todo[] = [
  {
    id: 1,
    value: "Hello",
    done: true
  },
  {
    id: 2,
    value: "World!",
    done: false
  }
]

function App() {
  const todoId = useRef(initialState.length);
  const [todo, setTodo] = useState("");
  const [todos, dispatch] = useReducer(reducer, initialState);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setTodo(e.target.value);
  const handleSubmit = () => {
    todoId.current += 1;
    const newTodo: Todo = {
      id: todoId.current,
      value: todo,
      done: false
    }
    dispatch({ type: ADD, todo: newTodo })
    setTodo("")
  }
  const handleDelete = (deleteTodo: Todo) => dispatch({ type: "DELETE", todo: todos.filter((todo: Todo) => todo.id === deleteTodo.id)[0] });
  const toggle = (checkedTodo: Todo) => dispatch({ type: TOGGLE, todos: todos.map((todo: Todo) => (todo.id === checkedTodo.id ? { ...todo, done: !todo.done } : todo)) });
  
  // useEffect(()=>console.log(todos))

  return (
    <div className="App">
      <label id="todo">Todo</label>
      <input type="text" id="todo" value={todo} onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)} placeholder="입력" />
      <button onClick={handleSubmit}>+ADD</button>
      {todos.map((todo: Todo) => (
        <div key={todo.id}>
          <input type="checkbox" onChange={() => toggle(todo)} checked={todo.done} />
          {todo.id} {todo.value} <button onClick={()=>handleDelete(todo)}>-DEL</button>
        </div>
      ))}
    </div>
  );
}

export default App;
