import { Todo } from '../types/todo' 

const TodoList = (props: any) => {
  return (
    <>
      {props.todos.map((todo: Todo) => (
        <div key={todo.id}>
          <input type="checkbox" onChange={() => props.toggle(todo)} checked={todo.done} />
          {todo.id} {todo.value} <button onClick={()=>props.handleDelete(todo)}>-DEL</button>
        </div>
      ))}
    </>
  )
}

export default TodoList