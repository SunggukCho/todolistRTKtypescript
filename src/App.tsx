import './App.css';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, delTodo, toggleTodo } from './features/todos/todoList';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';
import {Todo} from './types/todo';


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
    <>
      <TodoInput todo={todo} onChange={handleChange} placeholder="할 일 입력" />
      <button onClick={handleSubmit}>+ADD</button>
      <TodoList todos={todos} handleSubmit={handleSubmit} handleDelete={handleDelete} toggle={toggle}/>
    </>
  );
}

export default App;
