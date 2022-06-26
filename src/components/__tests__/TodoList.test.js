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

test("TodoList 엘리먼트에 `Todo`라는 글자가 포함되어있는가?", ()=>{
  // 텍스트 render 체크
  // TodoList 엘리먼트에 "Todo"라는 글자가 포함되어있는가?
  render(<TodoList {...TodoListProps} />)
  const TodoListEl = screen.getByText(/Todo/i)
  expect(TodoListEl).toBeInTheDocument();
})

test("TodoList 스냅샷 체크", () => {
  // 스냅샷 활용
  // 미리찍어둔 화면과 렌더링된 화면이 같은지를 체크함.
  // 처음 테스트를 하면 snapshots라는 디렉토리가 생성됨.
  const el = render(<TodoList {...TodoListProps} />)
  expect(el).toMatchSnapshot();
})

