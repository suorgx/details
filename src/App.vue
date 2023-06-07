<script setup>
import { useDataStore } from './store/DataStore.js'

const dataStore = useDataStore()
if (!dataStore.users.length) dataStore.initialize()
</script>

<template>
  <Header />
  <main>
    <router-view></router-view>
  </main>
</template>
