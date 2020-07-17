import axios from "axios";

export default {
  getPosts: function() {
    return axios
      .get("https://jsonplaceholder.typicode.com/posts")
  },
  getPostById: function(postId) {
    return axios
      .get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
  },
  deletePostById: function(postId) {
    return axios
      .delete(`https://jsonplaceholder.typicode.com/posts/${postId}`)
  },
};
