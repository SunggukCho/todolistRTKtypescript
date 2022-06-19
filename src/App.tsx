import './App.css';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, delTodo, toggleTodo } from './features/todos/todoList'

interface Todo {
  id: number;
  value: string;
  done: boolean;
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
  const dispatch = useDispatch();
  const todos = useSelector((state: any) => state.todos);

  const [todo, setTodo] = useState("");
  // const [todos, dispatch] = useReducer(reducer, initialState);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setTodo(e.target.value);
  const handleSubmit = () => {
    todoId.current += 1;
    const newTodo: Todo = {
      id: todoId.current,
      value: todo,
      done: false
    }
    dispatch(addTodo(newTodo))
    setTodo("")
  }
  const handleDelete = (deleteTodo: Todo) => dispatch(delTodo(deleteTodo));
  const toggle = (checkedTodo: Todo) => dispatch(toggleTodo(checkedTodo));

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
