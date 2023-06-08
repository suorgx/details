<script setup>
import ProductsCard from './ProductsCard.vue'
import { useDataStore } from '../store/DataStore.js'

const dataStore = useDataStore()

defineProps({
  cart: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="w-full" v-if="cart">
    <div class="text-sm font-normal uppercase text-gray-800">Products:</div>
    <products-card :products="cart.products"></products-card>
    <div  class="text-sm font-normal uppercase text-gray-800 mt-4">Details:</div>
    <ul class="divide-y divide-gray-200">
      <li class="py-0.5 sm:py-1">
        <div class="flex items-center space-x-2">
          <div class="flex-1 min-w-0">
            <p class="text-sm text-gray-900 truncate">
              ID cart
            </p>
          </div>
          <div class="inline-flex items-center text-base text-gray-900">
            {{ cart.id }}
          </div>
        </div>
      </li>
      <li class="py-0.5 sm:py-1">
        <div class="flex items-center space-x-2">
          <div class="flex-1 min-w-0">
            <p class="text-sm text-gray-900 truncate">
              Buyer
            </p>
          </div>
          <div class="inline-flex items-center text-base text-gray-900">
            {{ dataStore.users[cart.id].firstName }} {{ dataStore.users[cart.id].lastName }}
          </div>
        </div>
      </li>
      <li class="py-0.5 sm:py-1">
        <div class="flex items-center space-x-2">
          <div class="flex-1 min-w-0">
            <p class="text-sm text-gray-900 truncate">
              Total Products
            </p>
          </div>
          <div class="inline-flex items-center text-base text-gray-900">
            {{ cart.totalProducts }}
          </div>
        </div>
      </li>
      <li class="py-0.5 sm:py-1">
        <div class="flex items-center space-x-2">
          <div class="flex-1 min-w-0">
            <p class="text-sm text-gray-900 truncate">
              Total Quantity
            </p>
          </div>
          <div class="inline-flex items-center text-base text-gray-900">
            {{ cart.totalQuantity }}
          </div>
        </div>
      </li>
      <li class="py-0.5 sm:py-1">
        <div class="flex items-center space-x-2">
          <div class="flex-1 min-w-0">
            <p class="text-sm text-gray-900 truncate">
              Total Price
            </p>
          </div>
          <div class="inline-flex items-center text-base text-gray-900">
            {{ cart.total }}
          </div>
        </div>
      </li>
      <li class="py-0.5 sm:py-1">
        <div class="flex items-center space-x-2">
          <div class="flex-1 min-w-0">
            <p class="text-sm text-gray-900 truncate">
              Discounted Total Price
            </p>
          </div>
          <div class="inline-flex items-center font-semibold text-base text-gray-900">
            {{ cart.discountedTotal }}
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
