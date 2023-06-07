<script setup>
import { useUsersStore } from '../store/UsersStore.js'
import UsersList from '../components/UsersList.vue'

const usersStore = useUsersStore()
</script>

<template>
  <div v-if="usersStore.loading">Loading...</div>
  <users-list :users="usersStore.users" v-else></users-list>
</template>
