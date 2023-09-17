import { MdTask } from 'react-icons/md'
import styles from './Todo.module.css'

function Todo({ todo, index, deleteTodo }) {
  return (
    <li className={styles.todo} onDoubleClick={() => deleteTodo(index)}>
      <MdTask className={styles.todoIcon} />
      <span className={styles.todoText}>{todo}</span>
    </li>
  )
}

export default Todo
