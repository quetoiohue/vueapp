import * as mutationTypes from "../mutationTypes/posts";
import actions from "../actions/posts";

const posts = {
  state: () => ({
    posts: [],
    postById: null,
    isLoading: true,
    error: "",
  }),
  mutations: {
    [mutationTypes.GET_POSTS_REQUEST](state) {
      state.isLoading = true;
      state.error = "";
    },
    [mutationTypes.GET_POSTS_SUCCESS](state, payload) {
      state.posts = [...payload.data];
      state.isLoading = false;
      state.error = "";
    },
    [mutationTypes.GET_POSTS_ERROR](state, payload) {
      state = { ...state };
      state.postById = [];
      state.isLoading = false;
      state.error = payload.error;
    },
    [mutationTypes.GET_POST_BY_ID_REQUEST](state) {
      state.isLoading = true;
      state.error = "";
    },
    [mutationTypes.GET_POST_BY_ID_SUCCESS](state, payload) {
      console.log("state", state);
      state.postById = payload.data;
      state.isLoading = false;
      state.error = "";
    },
    [mutationTypes.GET_POST_BY_ID_ERROR](state, payload) {
      state.isLoading = false;
      state.error = payload.error;
    },
    [mutationTypes.DELETE_POST_BY_ID_SUCCESS](state, payload) {
        console.log("payload dletet" ,payload);
      const deletedTodoIndex = state.posts.findIndex(
        (_post) => _post.id === payload.postId
      );
      state.posts.splice(deletedTodoIndex, 1);
      state.isLoading = false;
      state.error = payload.data;
    },
  },
  actions,
};

export default posts;
