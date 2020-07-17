import Vue from "vue";
//Dòng này để import vue-router
import VueRouter from "vue-router";
import UserList from "../containers/Users/UserList.vue";
import TodoList from "../containers/Todos/TodoList.vue";
import TodoDetail from "../containers/Todos/TodoDetail.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/users", name:"users",  component: UserList },
  { path: "/todos", name:"todos", component: TodoList },
  { path: "/todos/:todoId", name:"todo detail", component: TodoDetail },
];

const router = new VueRouter({
  mode: 'history',
  routes, // short for `routes: routes`
});

export default router