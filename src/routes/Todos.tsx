import { useState, useRef, useEffect } from 'react'
import { Todo } from '../types'
import { TodoList } from '../components'
import { v4 as uuid } from 'uuid'
import './Todos.css'

const LOCAL_STORAGE_TODO_LIST_KEY = 'todoApp.todoList'

export function Todos(): JSX.Element {
  const todoInput = useRef<HTMLInputElement>(null)
  const [todoList, setTodos] = useState([])
  const [currentTodoInput, setCurrentTodoInput] = useState('')

  useEffect(() => {
    const storedTodoList = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_TODO_LIST_KEY)
    )
    if (storedTodoList) setTodos(storedTodoList)
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_TODO_LIST_KEY, JSON.stringify(todoList))
  }, [todoList])

  function toggleTodo(id: string): void {
    const newTodos = [...todoList]
    const todoToUpdate = newTodos.find((todoListItem) => todoListItem.id === id)
    if (!todoToUpdate) return
    todoToUpdate.checked = !todoToUpdate.checked
    setTodos(newTodos)
  }

  function resetInputField(): void {
    setCurrentTodoInput('')
    todoInput.current.value = ''
  }

  function handleAddTodo(): void {
    if (currentTodoInput.length === 0) return

    const newTodo: Todo = {
      id: uuid(),
      checked: false,
      name: currentTodoInput,
    }
    const newTodos = [...todoList, newTodo]
    setTodos(newTodos)
    resetInputField()
  }

  function handleKeyDown(event): void {
    if (event.code === 'Enter') handleAddTodo()
  }
  return (
    <div className="todos">
      <h2>My todos</h2>
      <TodoList
        todoList={todoList.filter((todoListItem) => !todoListItem.checked)}
        toggleTodo={toggleTodo}
      />
      <div className="add-todos">
        <input
          type="text"
          ref={todoInput}
          onKeyPress={handleKeyDown}
          onChange={(e) => setCurrentTodoInput(e.target.value)}
        />
        <button onClick={handleAddTodo} className="add-todo">
          Add todo
        </button>
      </div>
    </div>
  )
}
