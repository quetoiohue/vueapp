<template>
  <div>
    <h2 class="text-center p-4">Todos App</h2>
    <input
      v-model="newTodo"
      class="m-4 form-control"
      type="text"
      name="todo"
      placeholder="Add new Todo"
    />
    <button class="btn btn-info mb-3 form-control" @click="editing ? modifyTodo() : addTodo()">
      {{ editing ? "Update Todo" : "Add new Todo" }}
    </button>
    <li
      v-for="todo in todos"
      v-bind:key="todo.id"
      class="list-group-item list-group-item-info"
    >
      {{ todo.content }}
      <button @click="deleteTodo(todo)" class="btn btn-danger ml-4">
        delete
      </button>
      <button @click="updateTodo(todo.id)" class="btn btn-warning ml-4">
        Update
      </button>
      <button @click="goToPostDetail(todo.id)" class="btn btn-warning ml-4">
        Detail
      </button>
    </li>
  </div>
</template>

<script>
export default {
  name: "List",
  data() {
    return {
      newTodo: "",
      editing: false,
      index: null,
      todos: [
        {
          id: 1,
          content: "Create Multilanguage in Modmo 1.",
        },
        {
          id: 2,
          content: "Create Multilanguage in Modmo 2.",
        },
        {
          id: 3,
          content: "Create Multilanguage in Modmo 3.",
        },
        {
          id: 4,
          content: "Create Multilanguage in Modmo 4.",
        },
        {
          id: 5,
          content: "Create Multilanguage in Modmo 5.",
        },
      ],
    };
  },
  methods: {
    goToPostDetail(id) {  
      console.log(id);
      this.$router.push({ path: `/todos/${id}`})
    },
    addTodo() {
      const newTodo = {
        id: this.todos[this.todos.length - 1].id + 1,
        content: this.newTodo,
      };
      this.todos.push(newTodo);
      this.newTodo = "";
    },
    deleteTodo(todo) {
      console.log("Deleted todo ", todo);
      const deletedTodoIndex = this.todos.findIndex((_todo) => _todo.id === todo.id);
      this.todos.splice(deletedTodoIndex, 1);
    },
    updateTodo(index) {
      const modifiedTodoIndex = this.todos.findIndex(_todo => _todo.id === index);

      this.index = index;
      this.editing = true;
      this.newTodo = this.todos[modifiedTodoIndex].content;
    },
    modifyTodo(){
      const modifiedTodoIndex = this.todos.findIndex(_todo => _todo.id === this.index);

      this.todos[modifiedTodoIndex].content = this.newTodo;
      this.editing = false;
      this.index = null;
      this.newTodo = ""
    }
  },
};
</script>

<style lang="scss" scoped></style>
