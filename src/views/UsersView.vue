<script setup>
import { useUsersStore } from '../store/UsersStore.js'

const usersStore = useUsersStore()
</script>

<template>
  <div v-for="user in usersStore.users" :key="user.id">
    {{ user.name }}
  </div>
</template>
