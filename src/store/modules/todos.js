const state = {
  todos: [
    { id: 1, text: 'Vue 2の基本を学ぶ', completed: false },
    { id: 2, text: 'Option APIを理解する', completed: false },
    { id: 3, text: 'サンプルアプリを作る', completed: false }
  ],
  filter: 'all' // all, active, completed
}

const mutations = {
  ADD_TODO(state, text) {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false
    }
    state.todos.push(newTodo)
  },
  
  TOGGLE_TODO(state, id) {
    const todo = state.todos.find(todo => todo.id === id)
    if (todo) {
      todo.completed = !todo.completed
    }
  },
  
  DELETE_TODO(state, id) {
    state.todos = state.todos.filter(todo => todo.id !== id)
  },
  
  SET_FILTER(state, filter) {
    state.filter = filter
  }
}

const actions = {
  addTodo({ commit }, text) {
    if (text.trim()) {
      commit('ADD_TODO', text)
    }
  },
  
  toggleTodo({ commit }, id) {
    commit('TOGGLE_TODO', id)
  },
  
  deleteTodo({ commit }, id) {
    commit('DELETE_TODO', id)
  },
  
  setFilter({ commit }, filter) {
    commit('SET_FILTER', filter)
  }
}

const getters = {
  filteredTodos: state => {
    switch (state.filter) {
      case 'active':
        return state.todos.filter(todo => !todo.completed)
      case 'completed':
        return state.todos.filter(todo => todo.completed)
      default:
        return state.todos
    }
  },
  
  todoCount: state => {
    return state.todos.length
  },
  
  completedCount: state => {
    return state.todos.filter(todo => todo.completed).length
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
} 