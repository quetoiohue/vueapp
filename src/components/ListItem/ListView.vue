<template>
  <div class="container">
    <h2 class="text-center p-4">{{ title }}</h2>
    <li
      v-for="todo in todos"
      v-bind:key="todo.id"
      class="list-group-item list-group-item-info d-flex row"
    >
      <p class="col-8 text-center text-red-1">
        {{ todo.title }}
      </p>
      <div class="col-4 d-flex justify justify-content-between">
        <button @click="deleteTodo(todo.id)" class="btn btn-danger ml-4">
          delete
        </button>
        <button @click="updateTodo(todo.id)" class="btn btn-warning ml-4">
          Update
        </button>
        <button @click="goToPostDetail(todo.id)" class="btn btn-warning ml-4">
          Detail
        </button>
      </div>
    </li>
  </div>
</template>

<script>
export default {
  name: "ListView",
  props: ["title", "todos", "deletePostById"],
  methods: {
    goToPostDetail(id) {
      console.log(id);
      this.$router.push({ path: `/todos/${id}` });
    },
    addTodo() {
      const newTodo = {
        id: this.todos[this.todos.length - 1].id + 1,
        content: this.newTodo,
      };
      this.todos.push(newTodo);
      this.newTodo = "";
    },
    deleteTodo(postId) {
      this.deletePostById(postId);
      console.log("Deleted todo ", postId);
    },
    updateTodo(index) {
      const modifiedTodoIndex = this.todos.findIndex(
        (_todo) => _todo.id === index
      );

      this.index = index;
      this.editing = true;
      this.newTodo = this.todos[modifiedTodoIndex].content;
    },
    modifyTodo() {
      const modifiedTodoIndex = this.todos.findIndex(
        (_todo) => _todo.id === this.index
      );

      this.todos[modifiedTodoIndex].content = this.newTodo;
      this.editing = false;
      this.index = null;
      this.newTodo = "";
    },
  },
};
</script>

<style lang="scss" scoped></style>
