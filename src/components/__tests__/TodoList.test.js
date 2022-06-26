import { render, screen } from '@testing-library/react';
import TodoList from '../TodoList';

const TodoListProps = {
  todos: [
    {
      "id": 1,
      "value": "Hello",
      "done": true
    },
    {
      "id": 2,
      "value": "World!",
      "done": false
    }
  ],
  handleSubmit: () => {
    console.log('handle submit test')
  },
  handleDelete: (deleteTodo) => console.log('handle submit test delete'),
  toggle: (checkedTodo) => console.log('handle submit test toggle')
}

test("TodoList 배열이 제대로 오는가", ()=>{
  render(<TodoList {...TodoListProps} />)
  const TodoListEl = screen.getByText(/Todo/i)
  expect(TodoListEl).toBeInTheDocument();
})