import axios from 'axios';

const Post = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/posts'
});

async function postCall(url = '/', body = undefined, method = 'get') {
  try {
    let res = await Post({
      method: method,
      url: url,
      data: body
    });
    return res.data;
  }
  catch (err) {
    throw new Error(err);
  }
}

export function getAllPosts() {
  return postCall();
}

export function getPost(id) {
  return postCall(`/${id}`);
}

export function newPost(body) {
  return postCall(undefined, body, 'post');
}

export function editPost(id, fields) {
  return postCall(`/${id}`, fields, 'patch');
}

export function deletePost(id) {
  return postCall(`/${id}`, undefined, 'delete');
}