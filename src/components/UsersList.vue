<script setup>
defineProps({
  users: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <div class="block min-w-full overflow-hidden bg-white" v-if="users.length">
    <div class="w-full leading-normal">
      <div class="hidden w-full grid-cols-3 items-center text-left text-sm font-normal uppercase text-gray-800 sm:grid">
        <div class="px-5 py-3">
          User
        </div>
        <div class="px-5 py-3">
          Email
        </div>
        <div class="px-5 py-3">
          Phone
        </div>
      </div>
      <ul>
        <li
          class="grid w-full grid-cols-1 items-center text-sm text-gray-900 duration-200 whitespace-no-wrap sm:grid-cols-3"
          v-for="user in users"
          :key="user.id"
        >
          <div class="flex items-center gap-2 p-1 sm:px-5 sm:py-2">
            <div class="flex-shrink-0">
              <img
                alt="user image"
                :src="user.image"
                class="mx-auto block h-14 w-14 rounded-full object-cover"
              />
            </div>
            <router-link class="cursor-pointer underline hover:text-green-500" v-bind:to="`/user/${user.id}`">
              {{ user.firstName }} {{ user.lastName }}
            </router-link>
          </div>
          <div class="p-1 sm:px-5 sm:py-2">
            {{ user.email }}
          </div>
          <div class="p-1 sm:px-5 sm:py-2">
            {{ user.phone }}
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
