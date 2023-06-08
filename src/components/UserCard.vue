<script setup>
import InputModal from './InputModal.vue'

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
      <div class="items-center bg-white px-2 py-1 sm:py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt class="text-sm font-normal uppercase text-gray-800">
          Image
        </dt>
        <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
          <img
            alt="user image"
            :src="`${user.image}?set=set4`"
            class="block h-14 w-14 rounded-full object-cover"
          />
        </dd>
      </div>
      <div class="items-center bg-white px-2 py-1 sm:py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt class="text-sm font-normal uppercase text-gray-800">
          First Name
        </dt>
        <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
          <input-modal placeholder="First Name" :value="user.firstName"></input-modal>
        </dd>
      </div>
      <div class="items-center bg-white px-2 py-1 sm:py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt class="text-sm font-normal uppercase text-gray-800">
          Last Name
        </dt>
        <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
          <input-modal placeholder="Last Name" :value="user.lastName"></input-modal>
        </dd>
      </div>
      <div class="items-center bg-white px-2 py-1 sm:py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt class="text-sm font-normal uppercase text-gray-800">
          City
        </dt>
        <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
          <input-modal placeholder="City" :value="user.address.city"></input-modal>
        </dd>
      </div>
      <div class="items-center bg-white px-2 py-1 sm:py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt class="text-sm font-normal uppercase text-gray-800">
          Email
        </dt>
        <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
          <input-modal type="email" placeholder="Email" :value="user.email"></input-modal>
        </dd>
      </div>
      <div class="items-center bg-white px-2 py-1 sm:py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt class="text-sm font-normal uppercase text-gray-800">
          Phone
        </dt>
        <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
          <input-modal type="tel" placeholder="Phone" :value="user.phone"></input-modal>
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
