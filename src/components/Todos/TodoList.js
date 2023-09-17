import Todo from './Todo'

function TodoList({ todos, deleteTodo }) {
  return (
    <ul>
      {todos.map((todo, index) => (
        <Todo key={index} todo={todo} index={index} deleteTodo={deleteTodo} />
      ))}
    </ul>
  )
}

export default TodoList
