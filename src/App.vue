<script setup>
import { useUsersStore } from './store/UsersStore.js'

const usersStore = useUsersStore()
if (!usersStore.users.length) usersStore.initialize()
</script>

<template>
  <Header />
  <main>
    <router-view></router-view>
  </main>
</template>
