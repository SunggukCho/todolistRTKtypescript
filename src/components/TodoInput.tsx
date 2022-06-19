const TodoInput = (props: any) => {
  return (
    <>
      <label id="todo">Todo</label>
      <input type="text" id="todo" value={props.todo} onChange={(e: React.ChangeEvent<HTMLInputElement>) => props.onChange(e)} placeholder={props.placeholder} />
    </>
  )
}

export default TodoInput