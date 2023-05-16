<template>
  <div class="container mx-auto">
    <div class="grid grid-cols-1 gap-4">
      <transition-group name="fade" tag="div" class="row">
        <TodoItems v-for="todo in allTodos" :key="todo.id" :todo="todo" />
      </transition-group>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import TodoItems from "./TodoItems.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    TodoItems,
  },
  computed: {
    ...mapGetters(["allTodos"]),
  },
};
</script>

<style>
.fade-enter-active {
  animation: rotateFrom90To0 1s;
}

@keyframes rotateFrom90To0 {
  from {
    transform: rotateX(90deg);
  }
  to {
    transform: rotateX(0deg);
  }
}
.fade-leave-active {
  transition: all 1s;
  transform: rotateX(90deg);
}

</style>
