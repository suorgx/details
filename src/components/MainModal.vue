<script setup>
import { computed } from 'vue'
import { useDataStore } from '../store/DataStore.js'
import UserCard from './UserCard.vue'
import TodosList from './TodosList.vue'
import ButtonModal from './ButtonModal.vue'
import CartDetails from './CartDetails.vue'

const dataStore = useDataStore()

const closeModal = () => {
  dataStore.modal = false
  dataStore.modalOption = ''
}

const user = computed(() => {
  return dataStore.users.find(el => Number(el.id) === Number(dataStore.idModal))
})

const cart = computed(() => {
  return dataStore.carts.find(el => Number(el.id) === Number(dataStore.idModal))
})
</script>

<template>
  <div
    tabindex="-1"
    class="fixed top-0 right-0 left-0 z-50 max-h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden p-2 sm:p-4 sm:inset-0"
    :class="dataStore.modal ? 'flex' : 'hidden'"
    @click.self="closeModal"
  >
    <div class="relative max-h-full w-full max-w-2xl">
      <div class="relative rounded-lg bg-white shadow sm:shadow-2xl">
        <div class="flex items-start justify-between rounded-t border-b p-2 sm:p-4">
          <h3 class="text-xl text-gray-900" v-if="dataStore.idModal">
            {{ dataStore.modalOption === 'cart' ? `ID cart: ${cart.id}` : `${user.firstName} ${user.lastName}` }}
          </h3>
          <button
            type="button"
            class="ml-auto shadow inline-flex items-center rounded-lg bg-transparent text-sm text-gray-400 p-1.5 hover:bg-gray-100 hover:text-gray-900"
            @click="closeModal"
          >
            <svg aria-hidden="true" class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          </button>
        </div>
        <div class="p-1 space-y-2 sm:p-6 sm:space-y-6 max-h-80 sm:max-h-full overflow-x-auto" v-if="dataStore.idModal">
          <user-card :user="user" v-if="dataStore.modalOption === 'user'"></user-card>
          <todos-list :user="user" v-else-if="dataStore.modalOption === 'todos'"></todos-list>
          <cart-details :cart="cart" v-else-if="dataStore.modalOption === 'cart'"></cart-details>
        </div>
        <div class="flex items-center rounded-b border-t border-gray-200 p-2 sm:p-6 space-x-2" v-if="dataStore.modalOption !== 'cart'">
          <button-modal
            text="Save"
          ></button-modal>
          <button-modal
            detail
            text="Cancel"
          ></button-modal>
        </div>
      </div>
    </div>
  </div>
</template>
