<script setup>
defineProps({
  detail: Boolean,
  text: String
})
</script>

<template>
  <button
    type="button"
    class="m-0 flex-shrink-0 rounded-full border px-2 py-1 text-center text-sm font-medium focus:ring-4 lg:py-2.5 lg:px-5"
    :class="`${detail ? 'text-gray-900 bg-white border-gray-300 focus:outline-none hover:border-green-500 focus:ring-green-200' : 'text-white border-green-500 bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-green-300'}`"
  >
    {{ text ? text : 'Button' }}
  </button>
</template>
