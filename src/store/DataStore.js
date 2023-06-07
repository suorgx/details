import { defineStore } from 'pinia'

export const useDataStore = defineStore('dataStore', {
  state: () => ({
    users: [],
    carts: [],
    loading: true
  }),
  actions: {
    async getUsers () {
      try {
        this.loading = true
        const res = await fetch('https://dummyjson.com/users')
        const data = await res.json()
        this.users = data.users
      } catch (error) {
        console.error(error)
      } finally {
        this.loading = false
      }
    },
    async getCarts () {
      try {
        this.loading = true
        const res = await fetch('https://dummyjson.com/carts')
        const data = await res.json()
        this.carts = data.carts
      } catch (error) {
        console.error(error)
      } finally {
        this.loading = false
      }
    },
    async getTodos (id) {
      try {
        const res = await fetch(`https://dummyjson.com/todos/user/${id}`)
        const data = await res.json()
        const todos = data.todos
        const index = this.users.findIndex(user => user.id === Number(id))
        if (index !== -1) this.addTodosToUser(index, todos)
      } catch (error) {
        console.error(error)
      }
    },
    addTodosToUser (index, todos) {
      const user = this.users[index]
      if (!('todos' in user)) this.users[index] = { ...user, todos }
    },
    async initialize () {
      await Promise.all([
        this.getUsers(),
        this.getCarts()
      ])
    }
  }
})
