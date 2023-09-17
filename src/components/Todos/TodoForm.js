import { useState } from 'react'
import styles from './TodoForm.module.css'

function TodoForm({ addTodo }) {
  const [text, setText] = useState('')
  const onSubmitHandler = (event) => {
    event.preventDefault()
    if (text !== '') {
      addTodo(text)
      setText('')
    }
  }
  return (
    <form className={styles.todoForm} onSubmit={onSubmitHandler}>
      <input
        className={styles.todoFormInput}
        placeholder="Enter new todo"
        value={text}
        onChange={(e) => {
          setText(e.target.value)
        }}
      />
      <button className={styles.todoFormButton} type="submit">
        Submit
      </button>
    </form>
  )
}

export default TodoForm
