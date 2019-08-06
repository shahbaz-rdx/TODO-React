import { FETCH_POSTS, NEW_POST } from "./actions";

export const fetchPosts = () => dispatch => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(posts =>
      dispatch({
        type: FETCH_POSTS,
        payload: posts
      })
    )
    .catch(err => console.log(err));
};

export const addPost = newPost => dispatch => {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(newPost)
  })
    .then(post => post.json())
    .then(data =>
      dispatch({
        type: NEW_POST,
        payload: data
      })
    );
};
