<script setup>
import { useDataStore } from './store/DataStore.js'
import HeaderMain from './components/HeaderMain.vue'
import MainModal from './components/MainModal.vue'

const dataStore = useDataStore()
if (!dataStore.users.length) dataStore.initialize()
</script>

<template>
  <header-main></header-main>
  <main>
    <router-view></router-view>
  </main>
  <main-modal></main-modal>
</template>
