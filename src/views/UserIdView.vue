<script setup>
import { useUsersStore } from '../store/UsersStore.js'
import { useRoute } from 'vue-router'

const usersStore = useUsersStore()

const route = useRoute()
const id = route.params.id

usersStore.getTodos(id)
</script>

<template>
  {{ usersStore.users.find(el => Number(el.id) === Number($route.params.id)) }}
</template>
