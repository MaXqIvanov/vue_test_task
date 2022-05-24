<template>
  <div class="home">
    <TodoListComp />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import '../scss/todo.scss';
import TodoListComp from '@/components/TodoListComp.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    TodoListComp,
  },
});
</script>
