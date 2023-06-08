import { defineStore } from 'pinia'

export const useDataStore = defineStore('dataStore', {
  state: () => ({
    users: [],
    carts: [],
    modal: false,
    modalOption: '',
    loading: true,
    idModal: null,
    newFirstName: '',
    newLastName: '',
    newEmail: '',
    newPhone: '',
  }),
  getters: {
    user: (state) => {
      return state.users.find(
        (el) => Number(el.id) === Number(state.idModal)
      )
    },
    cart: (state) => {
      return state.carts.find(
        (el) => Number(el.id) === Number(state.idModal)
      )
    },
  },
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
    },
    updateUser () {
      if (this.idModal === null) return

      if (this.newFirstName.length) this.users[this.idModal - 1].firstName = this.newFirstName
      if (this.newLastName.length) this.users[this.idModal - 1].lastName = this.newLastName
      if (this.newEmail.length) this.users[this.idModal - 1].email = this.newEmail
      if (this.newPhone.length) this.users[this.idModal - 1].phone = this.newPhone
    }
  }
})
