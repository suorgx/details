<script setup>
defineProps({
  users: {
    type: Array,
    required: true
  }
})

const emit = defineEmits(['todoModal', 'detailModal'])

const handleTodoModal = (id) => {
  emit('todoModal', id)
}

const handleDetailModal = (id) => {
  emit('detailModal', id)
}
</script>

<template>
  <div class="block min-w-full overflow-hidden bg-white" v-if="users.length">
    <div class="w-full leading-normal">
      <div class="hidden w-full grid-cols-9 items-center text-left text-sm font-normal uppercase text-gray-800 sm:grid sm:justify-items-center">
        <div class="p-1 sm:py-2 flex-shrink-0"></div>
        <div class="px-5 py-3 col-span-2">
          User
        </div>
        <div class="px-5 py-3 col-span-2">
          Email
        </div>
        <div class="px-5 py-3 col-span-2">
          Phone
        </div>
      </div>
      <ul>
        <li
          class="grid w-full grid-cols-1 items-center text-sm text-gray-900 duration-200 whitespace-no-wrap sm:grid-cols-9 sm:justify-items-center"
          v-for="user in users"
          :key="user.id"
        >
          <div class="p-1 flex-shrink-0">
            <img
              alt="user image"
              :src="`${user.image}?set=set4`"
              class="block h-14 w-14 rounded-full object-cover"
            />
          </div>
          <div class="p-1 sm:px-5 sm:py-2 col-span-2">
            {{ user.firstName }} {{ user.lastName }}
          </div>
          <div class="p-1 sm:px-5 sm:py-2 col-span-2">
            {{ user.email }}
          </div>
          <div class="p-1 sm:px-5 sm:py-2 col-span-2">
            {{ user.phone }}
          </div>
          <div class="p-1 flex gap-1 col-span-2">
            <button
              type="button"
              @click="handleTodoModal(user.id)"
              class="flex-shrink-0 text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-2 py-1 lg:px-5 lg:py-2.5 text-center m-0"
            >
              To Do
            </button>
            <button
              type="button"
              @click="handleDetailModal(user.id)"
              class="flex-shrink-0 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:border-green-500 focus:ring-4 focus:ring-green-200 font-medium rounded-full text-sm px-2 py-1 lg:px-5 lg:py-2.5 m-0"
            >
              Detail
            </button>
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
