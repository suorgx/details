<script setup>
import { useUsersStore } from '../store/UsersStore.js'

const usersStore = useUsersStore()
</script>

<template>
  {{ usersStore.users.find(el => Number(el.id) === Number($route.params.id)) }}
</template>
