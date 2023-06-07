<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="flex items-center justify-between bg-white header py-02">
    <nav class="text-lg font-semibold nav">
      <ul class="flex items-center">
        <li>
          <RouterLink to="/">Users</RouterLink>
        </li>
        <li>
          <RouterLink to="/payments">Payments</RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
ul {
  > li {
    @apply cursor-pointer border-b-2 border-green-500 border-opacity-0 duration-200 hover:border-opacity-100 hover:text-green-500;

    > a {
      @apply block p-4;

      &:is(.router-link-active) {
        @apply text-green-500;
      }
    }
  }
}
</style>
