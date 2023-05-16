<template>
  <div class="bg-[#181818] h-[100vh]">
    <div class="flex flex-col items-center justify-center py-6">
      <img class="w-80" src="./assets/Vuejs.png" />
      <h1 id="typing-text" class="text-white text-xl"></h1>
    </div>
    <TodoInput />
    <div>
      <TodoList />
    </div>
  </div>
</template>

<script>
import TodoInput from './components/TodoInput.vue'
import TodoItems from './components/TodoItems.vue'
import TodoList from './components/TodoList.vue'

export default {
  name: 'App',
  components: {
    TodoInput,
    TodoItems,
    TodoList,
  },
  mounted() {
    const textElement = document.getElementById('typing-text');
    const text = 'Welcome to my first TODO LIST in Vue.js';
    const duration = 7000; // 1 second
    const interval = duration / text.length;
    let counter = 0;

    function typeText() {
      if (counter === text.length) {
        counter = 0;
      }
      textElement.textContent = text.slice(0, counter);
      counter++;
    }

    setInterval(typeText, interval);
  },
}
</script>

<style>

</style>