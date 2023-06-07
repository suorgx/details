<script setup>
import { useUsersStore } from '../store/UsersStore.js'
import UsersList from '../components/UsersList.vue'

const usersStore = useUsersStore()

if (!usersStore.users.length) usersStore.getUsers()
</script>

<template>
  <users-list :users="usersStore.users"></users-list>
</template>
