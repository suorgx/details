<script setup>
import ButtonModal from './ButtonModal.vue'
import {useDataStore} from '../store/DataStore.js'
import ProductsCard from './ProductsCard.vue'

const dataStore = useDataStore()

defineProps({
  carts: {
    type: Array,
    required: true
  }
})

const handleCartModal = (id) => {
  dataStore.idModal = id
  dataStore.modalOption = 'cart'
  dataStore.modal = true
}
</script>



<template>
  <div class="block min-w-full overflow-hidden bg-white" v-if="carts.length">
    <div class="w-full leading-normal">
      <div class="hidden w-full grid-cols-8 items-center text-left text-sm font-normal uppercase text-gray-800 sm:grid">
        <div class="px-5 py-3">
          User
        </div>
        <div class="col-span-5 px-5 py-3">
          Products
        </div>
        <div class="px-5 py-3">
          Total
        </div>
        <div class="px-5 py-3"></div>
      </div>
      <ul>
        <li
          class="grid w-full grid-cols-1 items-center text-sm text-gray-900 duration-200 whitespace-no-wrap sm:grid-cols-8"
          v-for="cart in carts"
          :key="cart.id"
        >
          <div class="p-1 sm:px-5 sm:py-2" v-if="dataStore.users.length">
            {{ dataStore.users[cart.id].firstName }} {{ dataStore.users[cart.id].lastName }}
          </div>
          <div class="col-span-5 p-1 sm:px-5 sm:py-2">
            <products-card :products="cart.products"></products-card>
          </div>
          <div class="p-1 sm:px-5 sm:py-2">
            {{ cart.total }}
          </div>
          <div class="p-1">
            <button-modal
              @click="handleCartModal(cart.id)"
              detail
              text="Details"
            ></button-modal>
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
