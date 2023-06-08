<script setup>
import { computed } from 'vue'
import { useDataStore } from '../store/DataStore.js'

const dataStore = useDataStore()

const props = defineProps({
  user: {
    type: Object,
    required: true
  }
})

const userTodo = computed(() => {
  return props.user.todos
})

const toggleCheckbox = ($event, id) => {
  let obj = {
    id: id,
    completed: $event.target.checked
  }
  const index = dataStore.newTodos.findIndex(todo => todo.id === id);
  if (index !== -1) {
    dataStore.newTodos[index] = obj
  } else {
    dataStore.newTodos.push(obj)
  }
}
</script>

<template>
  <div class="max-w-full overflow-hidden bg-white" v-if="user">
    <dl>
      <div class="items-center bg-white px-2 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt class="text-sm font-normal uppercase text-gray-800">
          Todo List
        </dt>
        <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0" v-if="userTodo">
          <ul class="rounded-lg border border-gray-200 bg-white text-sm text-gray-900" v-if="userTodo.length">
            <li
              class="w-full rounded-t-lg"
              v-for="todo in user.todos"
              :key="todo.id"
            >
              <div class="flex items-center pl-3">
                <input
                  class="h-6 w-6 rounded border-gray-300 bg-gray-100 text-green-600 focus:ring-green-500"
                  :id="todo.id"
                  type="checkbox"
                  :checked="todo.completed ? 'checked' : null"
                  @change="toggleCheckbox($event, todo.id)"
                >
                <label
                  class="ml-2 w-full py-3 text-sm text-gray-900"
                  :for="todo.id"
                >
                  {{ todo.todo }}
                </label>
              </div>
            </li>
          </ul>
          <div v-else>To Do not found</div>
        </dd>
        <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0" v-else>Loading...</dd>
      </div>
    </dl>
  </div>
</template>
