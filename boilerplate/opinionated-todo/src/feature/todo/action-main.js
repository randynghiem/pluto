let nextTodoId = 0;

export const FilterStatus = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

export const ACTIONS = {
  ADD_TODO: 'ADD_TODO',
  TOGGLE_TODO: 'TOGGLE_TODO',
  SET_VISIBILITY_FILTER: 'SET_VISIBILITY_FILTER'
}

export const addTodo = text => ({
  type: ACTIONS.ADD_TODO,
  id: nextTodoId++,
  text
})

export const toggleTodo = id => ({
  type: ACTIONS.TOGGLE_TODO,
  id
})

export const setFilterStatus = filter => ({
  type: ACTIONS.SET_VISIBILITY_FILTER,
  filter
})
