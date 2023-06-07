<script setup>
import { useDataStore } from '../store/DataStore.js'
import UsersList from '../components/UsersList.vue'
import MainModal from '../components/MainModal.vue'

const dataStore = useDataStore()

const todoModal = id => {
  console.log('todo-modal', id)
}

const detailModal = id => {
  console.log('detail-modal', id)
}
</script>

<template>
  <div v-if="dataStore.loading">Loading...</div>
  <users-list
    :users="dataStore.users"
    v-else
    @todo-modal="id => todoModal(id)"
    @detail-modal="id => detailModal(id)"
  ></users-list>
  <main-modal active></main-modal>
</template>
