export type Todo = {
  id: string
  checked: boolean
  name: string
}

export type Style = Record<string, string | number>

export type Resource = 'posts' | 'albums' | 'users'
