<template>
  <div class="flex justify-center items-center">
    <input
    @change="todoTextChange"
    v-bind:value="todoText"
      type="text"
      class="bg-gray-100 w-[30%] border-2 border-gray-300 rounded py-2 px-4 placeholder-gray-400 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
      placeholder="Enter task name"
    />
    <button
    @click="addTodoI"
      class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-2 rounded ml-2 h-full"
    >
      Add Task
    </button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import {v1} from 'uuid'

export default {
    data(){
        return{
            todoText: ""
        }
    },
  methods: {
    ...mapActions(["addTodo"]),
    todoTextChange(e){
        this.todoText = e.target.value;
    },  
    addTodoI(){
        this.addTodo({
            id:v1(),
            title: this.todoText
        })
        this.todoText = "";
    }
},
};
</script>

<style scoped></style>
