<script setup>
defineProps({
  products: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <ul class="divide-y divide-gray-200" v-if="products">
    <li class="py-0.5 sm:py-1" v-for="product in products" :key="product.id">
      <div class="flex items-center space-x-2">
        <div class="flex-1 min-w-0">
          <p class="text-sm text-gray-900 truncate">
            {{ product.title }}
          </p>
          <p class="text-sm text-gray-500 truncate">
            quantity: {{ product.quantity }}
          </p>
        </div>
        <div class="inline-flex items-center text-base text-gray-900">
          {{ product.price }}
        </div>
      </div>
    </li>
  </ul>
</template>
