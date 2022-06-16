import './App.css';
import { useEffect, useRef, useState } from 'react';

interface Todo {
  id: number;
  value: string;
  done: boolean;
}

function App() {
  const todoId = useRef(0);
  
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setTodo(e.target.value);
  const handleSubmit = () => {
    todoId.current += 1;
    const newTodo: Todo = {
      id: todoId.current,
      value: todo,
      done: false
    }
    setTodoList([...todoList, newTodo])
  }
  const handleDelete = (deleteTodo: Todo) => setTodoList(todoList.filter((todo) => todo.id !== deleteTodo.id));
  const toggle = (checkedTodo: Todo) => setTodoList(todoList.map(todo => todo.id === checkedTodo.id ? { ...todo, done: !todo.done } : todo));
  // useEffect(()=>console.log(todoList))

  return (
    <div className="App">
      <label id="todo">Todo</label>
      <input type="text" id="todo" value={todo} onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)} placeholder="입력" />
      <button onClick={handleSubmit}>+ADD</button>
      {todoList.map((todo) => (
        <div key={todo.id}>
          <input type="checkbox" onChange={() => toggle(todo)} checked={todo.done} />
          {todo.id} {todo.value} <button onClick={()=>handleDelete(todo)}>-DEL</button>
        </div>
      ))}
    </div>
  );
}

export default App;
