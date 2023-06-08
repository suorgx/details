<script setup>
import { useDataStore } from '../store/DataStore.js'
import ButtonModal from './ButtonModal.vue'

const dataStore = useDataStore()

defineProps({
  users: {
    type: Array,
    required: true
  }
})

const handleTodoModal = (id) => {
  dataStore.modal = true
  dataStore.details = false
  dataStore.getTodos(id)
  dataStore.idModal = Number(id)
}

const handleDetailModal = (id) => {
  dataStore.modal = true
  dataStore.details = true
  dataStore.idModal = Number(id)
}
</script>

<template>
  <div class="block min-w-full overflow-hidden bg-white" v-if="users.length">
    <div class="w-full leading-normal">
      <div class="hidden w-full grid-cols-9 items-center text-left text-sm font-normal uppercase text-gray-800 sm:grid sm:justify-items-center">
        <div class="flex-shrink-0 p-1 sm:py-2"></div>
        <div class="col-span-2 px-5 py-3">
          User
        </div>
        <div class="col-span-2 px-5 py-3">
          Email
        </div>
        <div class="col-span-2 px-5 py-3">
          Phone
        </div>
      </div>
      <ul>
        <li
          class="grid w-full grid-cols-1 items-center text-sm text-gray-900 duration-200 whitespace-no-wrap sm:grid-cols-9 sm:justify-items-center"
          v-for="user in users"
          :key="user.id"
        >
          <div class="flex-shrink-0 p-1">
            <img
              alt="user image"
              :src="`${user.image}?set=set4`"
              class="block h-14 w-14 rounded-full object-cover"
            />
          </div>
          <div class="col-span-2 p-1 sm:px-5 sm:py-2">
            {{ user.firstName }} {{ user.lastName }}
          </div>
          <div class="col-span-2 p-1 sm:px-5 sm:py-2">
            {{ user.email }}
          </div>
          <div class="col-span-2 p-1 sm:px-5 sm:py-2">
            {{ user.phone }}
          </div>
          <div class="col-span-2 flex gap-2 p-1">
            <button-modal
              @click="handleTodoModal(user.id)"
              text="To Do"
            ></button-modal>
            <button-modal
              @click="handleDetailModal(user.id)"
              detail
              text="Detail"
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
