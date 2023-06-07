<script setup>
import { useDataStore } from '../store/DataStore.js'
import CartsList from '../components/CartsList.vue'

const dataStore = useDataStore()
</script>

<template>
  <div v-if="dataStore.loading">Loading...</div>
  <carts-list :carts="dataStore.carts" v-else></carts-list>
</template>
