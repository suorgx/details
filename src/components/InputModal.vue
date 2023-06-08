<script setup>
defineProps({
  value: String,
  placeholder: String,
  type: {
    type: String,
    default: 'text'
  }
})
</script>

<template>
  <input
    :type="type"
    class="block w-full rounded-lg border border-gray-300 bg-transparent text-sm text-gray-900 p-2.5 focus:border-blue-500 focus:ring-blue-500"
    :placeholder="placeholder"
    :value="value"
  >
</template>
