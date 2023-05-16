<template>
  <div class="">
    <div class="grid grid-cols-2 text-center m-2 rounded">
        <h3 class="flex justify-center items-center text-yellow-50" v-if="!editing">{{ todo.title }}</h3>
        <input v-bind:value="todoText" @change="todoTextChange" v-else type="text" class="bg-gray-100 border-2 border-gray-300 rounded py-2 px-4 placeholder-gray-400 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" />
      <div class="buttons">
        <button
        @click="updateTodoI(todo)"
          class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
        >
          {{ editing? "Update": "Edit" }}
        </button>
        <button
        @click="deleteTodo(todo.id)"
          class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 mx-2 px-4 rounded"
        >
          X
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    props: {
        todo: {

        }
    },
    data() {
        return {
            todoText:'',
            editing: false
        }
    },
    methods:{
        ...mapActions(['deleteTodo', 'updateTodo']),
        todoTextChange(e){
            this.todoText = e.target.value;
        },
        updateTodoI(todo){
            this.editing = !this.editing;
            if(this.editing){
                this.todoText = todo.title
                this.updateTodo(todo)
            } else {
    const updatedTodo = { ...todo, title: this.todoText };
    this.updateTodo(updatedTodo);
  }
        }
    }
};
</script>

<style scoped></style>
