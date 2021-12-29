import { Todo, Style } from '../types'

export function TodoListItem({
  todoListItem,
  toggleTodo,
}: {
  todoListItem: Todo
  toggleTodo: (id: string) => void
}): JSX.Element {
  const labelStyle: Style = {
    marginLeft: '8px',
  }

  function handleChange(): void {
    toggleTodo(todoListItem.id)
  }
  return (
    <div>
      <input
        type="checkbox"
        checked={todoListItem.checked}
        id={`checkbox-${todoListItem.id}`}
        name={todoListItem.name}
        onChange={handleChange}
      />
      <label htmlFor={`checkbox-${todoListItem.id}`} style={labelStyle}>
        {todoListItem.name}
      </label>
    </div>
  )
}
