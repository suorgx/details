<script setup>
import { useUsersStore } from '../store/UsersStore.js'
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import UserCard from '../components/UserCard.vue'

const usersStore = useUsersStore()

const route = useRoute()
const id = route.params.id

usersStore.getTodos(id)

const user = computed(() => {
  return usersStore.users.find(el => Number(el.id) === Number(id))
})
</script>

<template>
  <div v-if="usersStore.loading">Loading...</div>
  <user-card :user="user" v-else></user-card>
</template>
