<script setup>
defineProps({
  user: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="max-w-full overflow-hidden bg-white" v-if="user">
    <dl>
      <div class="items-center bg-white px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt>
          Image
        </dt>
        <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
          <img
            alt="user image"
            :src="user.image"
            class="block h-14 w-14 rounded-full object-cover"
          />
        </dd>
      </div>
      <div class="items-center bg-white px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt class="text-sm font-normal uppercase text-gray-800">
          User
        </dt>
        <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
          {{ user.firstName }} {{ user.lastName }}
        </dd>
      </div>
      <div class="items-center bg-white px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt class="text-sm font-normal uppercase text-gray-800">
          City
        </dt>
        <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
          {{ user.address.city }}
        </dd>
      </div>
      <div class="items-center bg-white px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt class="text-sm font-normal uppercase text-gray-800">
          Email address
        </dt>
        <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
          {{ user.email }}
        </dd>
      </div>
      <div class="items-center bg-white px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt class="text-sm font-normal uppercase text-gray-800">
          Phone
        </dt>
        <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
          {{ user.phone }}
        </dd>
      </div>
      <div class="items-center bg-white px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt class="text-sm font-normal uppercase text-gray-800">
          Todo List
        </dt>
        <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
          {{ user.todos }}
        </dd>
      </div>
    </dl>
  </div>
</template>

<style lang="scss" scoped>
dl {
  > div:first-of-type {
    @apply pt-0;
  }
  > div:nth-of-type(even) {
    @apply bg-gray-50;
  }
}
</style>
