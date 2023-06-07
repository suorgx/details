<script setup>
import { useDataStore } from '../store/DataStore.js'
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import UserCard from '../components/UserCard.vue'

const dataStore = useDataStore()

const route = useRoute()
const id = route.params.id

dataStore.getTodos(id)

const user = computed(() => {
  return dataStore.users.find(el => Number(el.id) === Number(id))
})
</script>

<template>
  <div v-if="dataStore.loading">Loading...</div>
  <user-card :user="user" v-else></user-card>
</template>
