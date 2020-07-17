import postApi from "../../api/posts";
import * as mutationTypes from "../mutationTypes/posts";

export default {
  handler: () => {},
  getPosts: ({ commit }) => {
    commit(mutationTypes.GET_POSTS_REQUEST);
    postApi
      .getPosts()
      .then(async (res) => {
        console.log("actions", res);
        const { data } = res;
        await commit({ type: mutationTypes.GET_POSTS_SUCCESS,  data });
      })
      .catch((error) => commit({ type: mutationTypes.GET_POSTS_ERROR, error }));
  },
  getPostById: ({ commit }, postId) => {
    commit(mutationTypes.GET_POST_BY_ID_REQUEST);
    postApi
      .getPostById(postId)
      .then(async (res) => {
        console.log("actions", res);
        const { data } = res;
        await commit({ type: mutationTypes.GET_POST_BY_ID_SUCCESS,  data });
      })
      .catch((error) => commit({ type: mutationTypes.GET_POST_BY_ID_ERROR, error }));
  },
  deletePostById: ({commit} , postId) => {
    commit( mutationTypes.GET_POSTS_REQUEST )
    postApi
      .deletePostById(postId)
      .then(async (res) => {
        console.log("actions", res);
        // const { data } = res;
        await commit({ type: mutationTypes.DELETE_POST_BY_ID_SUCCESS,  postId });
      })
      .catch((error) => commit({ type: mutationTypes.GET_POST_BY_ID_ERROR, error }));
  }
};
