<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <RouterLink to='/'><span>#</span>Users</RouterLink>
      <RouterLink to='/payments'><span>#</span>Payments</RouterLink>
    </nav>
  </header>
</template>
