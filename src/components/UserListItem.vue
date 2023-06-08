<script setup>
import ButtonModal from './ButtonModal.vue'

defineProps({
  user: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['todos-modal', 'user-modal'])
</script>

<template>
  <li
    class="grid w-full grid-cols-1 items-center text-sm text-gray-900 duration-200 whitespace-no-wrap sm:grid-cols-9 sm:justify-items-center"
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
        @click="$emit('todos-modal', user.id)"
        text="To Do"
      ></button-modal>
      <button-modal
        @click="$emit('user-modal', user.id)"
        detail
        text="Edit"
      ></button-modal>
    </div>
  </li>
</template>
