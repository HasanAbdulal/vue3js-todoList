<template>
  <div id="app">
    <todo-list url="https://6183b00391d76c00172d1aae.mockapi.io" />
  </div>
</template>

<script>
import TodoList from './components/TodoList.vue';

export default {
  name: 'App',
  components: {
    TodoList,
  },
};
</script>

<style></style>
