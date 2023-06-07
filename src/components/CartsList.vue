<script setup>
defineProps({
  carts: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <div class="block min-w-full overflow-hidden bg-white" v-if="carts.length">
    <div class="w-full leading-normal">
      <div class="hidden w-full grid-cols-8 items-center text-left text-sm font-normal uppercase text-gray-800 sm:grid">
        <div class="px-5 py-3">
          Id
        </div>
        <div class="col-span-5 px-5 py-3">
          products
        </div>
        <div class="px-5 py-3">
          userId
        </div>
        <div class="px-5 py-3">
          total
        </div>
      </div>
      <ul>
        <li
          class="grid w-full grid-cols-1 items-center text-sm text-gray-900 duration-200 whitespace-no-wrap sm:grid-cols-8"
          v-for="cart in carts"
          :key="cart.id"
        >
          <div class="p-1 sm:px-5 sm:py-2">
            {{ cart.id }}
          </div>
          <div class="col-span-5 p-1 sm:px-5 sm:py-2">
            {{ cart.products }}
          </div>
          <div class="p-1 sm:px-5 sm:py-2">
            {{ cart.userId }}
          </div>
          <div class="p-1 sm:px-5 sm:py-2">
            {{ cart.total }}
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
ul {
  > li:nth-of-type(odd) {
    @apply bg-gray-50
  }
}
</style>
