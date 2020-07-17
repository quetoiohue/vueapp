<template>
  <div>
    <h3 v-if="getPostById.isLoading">...Loading</h3>
    <h3 v-else>
      <h3>
        Posts
      </h3>
      <p>
        {{ getPostById.postById.id }}
      </p>
      <p>
        {{ getPostById.postById.title }}
      </p>
    </h3>
  </div>
</template>

<script>
export default {
  name: "TodoDetail",
  created() {
    this.fetchPostDetail(this.$route.params.todoId);
  },
  computed: {
    getPostById: (self) => self.$store.state.postList
  },
  watch: {
    // call again the method if the route changes
    $route: "fetchPostDetail",
  },
  methods: {
    fetchPostDetail(id) {
      this.$store.dispatch('getPostById', id);
    },
  },
};
</script>

<style lang="scss" scoped></style>
