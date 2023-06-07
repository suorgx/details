import { defineStore } from 'pinia'

export const useUsersStore = defineStore('usersStore', {
  state: () => ({
    users: []
  }),
  actions: {
    async getUsers () {
      const res = await fetch('https://dummyjson.com/users')
      const data = await res.json()
      this.users = data.users
    }
  }
})
