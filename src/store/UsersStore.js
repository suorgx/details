import { defineStore } from 'pinia'

export const useUsersStore = defineStore('usersStore', {
  state: () => ({
    users: []
  }),
  actions: {
    async getUsers () {
      try {
        const res = await fetch('https://dummyjson.com/users')
        const data = await res.json()
        this.users = data.users
      } catch (error) {
        console.error(error)
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
      if (!("todos" in user)) this.users[index] = { ...user, todos }
    },
    async initialize () {
      await Promise.all([
        this.getUsers()
      ])
    }
  }
})
