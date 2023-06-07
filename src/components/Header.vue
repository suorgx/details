<template>
  <header class="flex items-center justify-between bg-white header py-02">
    <nav class="text-lg font-semibold nav">
      <ul class="flex items-center">
        <li>
          <router-link to="/">Users</router-link>
        </li>
        <li>
          <router-link to="/payments">Payments</router-link>
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
