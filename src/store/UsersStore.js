import { defineStore } from 'pinia'
import { usersData } from '../mocks/usersData.js'

export const useUsersStore = defineStore('usersStore', {
  state: () => ({
    users: usersData
  })
})
