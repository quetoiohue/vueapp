<template>
  <div id="app">
    <h1><router-link to="/">Hello App!</router-link></h1>
    <p>
      <!-- use router-link component for navigation. -->
      <!-- specify the link by passing the `to` prop. -->
      <!-- `<router-link>` will be rendered as an `<a>` tag by default -->
      <router-link to="/users">Go to Users</router-link>
      <router-link class="ml-4" to="/todos">Go to Todos</router-link>
    </p>
    <!-- route outlet -->
    <!-- component matched by the route will render here -->
    <router-view></router-view>
  </div>
</template>
<script>

export default {
  name: "app",
};
</script>
<style lang="postcss" scoped>
#app {
  @apply text-center text-red-2;

  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 60px;
}

@screen md {
  #app {
    color: blue;
  }
}
</style>
