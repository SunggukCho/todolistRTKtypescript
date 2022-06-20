import './App.css';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, delTodo, toggleTodo, fetchInitialState } from './features/todos/todoList';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';
import { Todo } from './types/todo';
import { AppDispatch } from './store'

function App() {
  const todoId = useRef(2);
  const dispatch = useDispatch<AppDispatch>();
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

  useEffect(() => {
    dispatch(fetchInitialState())
  }, [])

  return (
    <>
      <TodoInput todo={todo} onChange={handleChange} placeholder="할 일 입력" />
      <button onClick={handleSubmit}>+ADD</button>
      <TodoList todos={todos} handleSubmit={handleSubmit} handleDelete={handleDelete} toggle={toggle}/>
    </>
  );
}

export default App;
