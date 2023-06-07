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
      <div class="hidden w-full grid-cols-3 items-center border-b border-gray-200 text-left text-sm font-normal uppercase text-gray-800 sm:grid">
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
      <div
        class="grid w-full grid-cols-1 items-center border-b-2 border-gray-200 text-sm text-gray-900 duration-200 whitespace-no-wrap hover:border-green-500 sm:grid-cols-3"
        v-for="user in users"
        :key="user.id"
      >
        <div
          class="flex items-center gap-1 p-2 sm:p-5"
        >
          <div class="flex-shrink-0">
            <img
              alt="user."
              :src="user.image"
              class="mx-auto block h-10 w-10 rounded-full object-cover"
            />
          </div>
          <a class="cursor-pointer underline hover:text-green-500" @click="$router.push(`/user/${user.id}`)">
            {{ user.firstName }} {{ user.lastName }}
          </a>
        </div>
        <div class="p-2 sm:p-5">
          {{ user.email }}
        </div>
        <div class="p-2 sm:p-5">
          {{ user.phone }}
        </div>
      </div>
    </div>
  </div>
</template>
