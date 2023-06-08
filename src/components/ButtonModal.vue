<script setup>
defineProps({
  detail: Boolean,
  text: String
})
</script>

<template>
  <button
    type="button"
    class="m-0 flex-shrink-0 rounded-full border border-transparent px-2 py-1 text-center text-sm font-medium focus:ring-4 lg:py-2.5 lg:px-5 shadow focus:outline-none focus:ring-green-300"
    :class="`${detail ? 'text-gray-900 bg-transparent hover:bg-gray-100' : 'text-white border-green-500 bg-green-500 hover:bg-green-600'}`"
  >
    {{ text ? text : 'Button' }}
  </button>
</template>
