<template>
  <div>
    <ListView
      v-if="getPostList.isLoading == false"
      v-bind:todos="getPostList.posts"
      v-bind:deletePostById="deletePost"
      title="List Post"
    />
    <div v-else class="text-center">
      <h3>...Loading</h3>
    </div>
  </div>
</template>

<script>
import ListView from "../../components/ListItem/ListView.vue";

export default {
  name: "TodoList",
  components: {
    ListView,
  },
  created() {
    this.fetchPosts();
  },
  computed: {
    getPostList() {
      return this.$store.state.postList;
    },
  },
  methods: {
    fetchPosts() {
      this.$store.dispatch("getPosts");
    },
    deletePost(postId) {
      this.$store.dispatch("deletePostById", postId);
    },
  },
};
</script>

<style lang="scss" scoped></style>
