import { TodoListItem } from './TodoListItem'
import { Todo } from '../types'
import './TodoList.css'

export function TodoList({
  todoList,
  toggleTodo,
}: {
  todoList: Todo[]
  toggleTodo: (id: string) => void
}): JSX.Element {
  const noTodos = todoList.length === 0
  return (
    <div className="todoList">
      {todoList.map((todoListItem) => (
        <TodoListItem
          toggleTodo={toggleTodo}
          todoListItem={todoListItem}
          key={todoListItem.id}
        />
      ))}
      {noTodos && <p>You have no todos yet</p>}
    </div>
  )
}
