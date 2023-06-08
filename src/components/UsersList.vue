<script setup>
import { useDataStore } from '../store/DataStore.js'
import UserListItem from './UserListItem.vue'

const dataStore = useDataStore()

defineProps({
  users: {
    type: Array,
    required: true
  }
})

const handleTodosModal = (id) => {
  dataStore.modalOption = 'todos'
  dataStore.getTodos(id)
  dataStore.idModal = id
  dataStore.modal = true
}

const handleUserModal = (id) => {
  dataStore.modalOption = 'user'
  dataStore.idModal = id
  dataStore.modal = true
  dataStore.newFirstName = dataStore.newLastName = dataStore.newPhone = dataStore.newEmail = ''
}
</script>

<template>
  <div class="block min-w-full overflow-hidden bg-white" v-if="users.length">
    <div class="w-full leading-normal">
      <div class="hidden w-full grid-cols-9 items-center text-left text-sm font-normal uppercase text-gray-800 sm:grid sm:justify-items-center">
        <div class="flex-shrink-0 p-1 sm:py-2"></div>
        <div class="col-span-2 px-5 py-3">
          User
        </div>
        <div class="col-span-2 px-5 py-3">
          Email
        </div>
        <div class="col-span-2 px-5 py-3">
          Phone
        </div>
      </div>
      <ul>
        <user-list-item
          v-for="user in users"
          :user="user"
          :key="user.id"
          @user-modal="value => handleUserModal(value)"
          @todos-modal="value => handleTodosModal(value)"
        ></user-list-item>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
ul {
  > li:nth-of-type(odd) {
    @apply bg-gray-50
  }
}
</style>
