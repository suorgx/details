<script setup>
import { useDataStore } from '../store/DataStore.js'
import UsersList from '../components/UsersList.vue'

const dataStore = useDataStore()
</script>

<template>
  <div v-if="dataStore.loading">Loading...</div>
  <users-list :users="dataStore.users" v-else></users-list>
</template>
