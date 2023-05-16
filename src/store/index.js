import { createStore } from 'vuex'

export default createStore({
  state: {
    todos: JSON.parse(localStorage.getItem('todos')) || []
  },
  getters: {
    allTodos: (state) => state.todos,
  },
  actions: {
    addTodo({commit}, todo) {
        commit('add_todo', todo)
    },
    deleteTodo({commit}, id){
      commit('delete_todo', id);
    },
    updateTodo({commit}, todo){
      commit('update_todo',todo)
    }
  },
  mutations: {
    add_todo(state, todo) {
      if (todo.title.trim().length > 0) {
      state.todos.push(todo)
      localStorage.setItem('todos', JSON.stringify(state.todos))
    }
    },
    delete_todo(state, id){
      state.todos = state.todos.filter(todo=>todo.id != id)
      localStorage.setItem('todos', JSON.stringify(state.todos))
    },
    update_todo(state, updatedTodo) {
      const index = state.todos.findIndex(t => t.id === updatedTodo.id);
      if (index !== -1) {
        state.todos[index] = updatedTodo;
        localStorage.setItem('todos', JSON.stringify(state.todos));
      }
    },
  },
  modules: {
  }
})
