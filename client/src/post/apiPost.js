export const createPost = (userId, token, post) => {
  return fetch(`post/new/${userId}`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: post
  })
    .then(res => res.json())
    .catch(err => console.log(err));
};

export const editPost = (postId, token, post) => {
  return fetch(`post/${postId}`, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: post
  })
    .then(res => res.json())
    .catch(err => console.log(err));
};

export const getAllPost = () => {
  return fetch(`post`)
    .then(res => res.json())
    .catch(err => console.log(err));
};

export const getPost = (postId, token) => {
  return fetch(`post/${postId}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`
    }
  })
    .then(res => res.json())
    .catch(err => console.log(err));
};

export const getPostByUser = (userId, token) => {
  return fetch(`post/by/${userId}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`
    }
  })
    .then(res => res.json())
    .catch(err => console.log(err));
};

export const removePost = (postId, token) => {
  return fetch(`post/${postId}`, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }
  })
    .then(res => res.json())
    .catch(err => console.log(err));
};

export const likePost = (postId, token, userId) => {
  return fetch(`post/like`, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({ userId, postId })
  })
    .then(res => res.json())
    .catch(err => console.log(err));
};

export const unlikePost = (postId, token, userId) => {
  return fetch(`post/unlike`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({ userId, postId })
  })
    .then(res => res.json())
    .catch(err => console.log(err));
};

export const newComment = (postId, token, userId, comment) => {
  return fetch(`post/comment`, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({ userId, postId, comment })
  })
    .then(res => res.json())
    .catch(err => console.log(err));
};

export const deleteComment = (postId, token, userId, comment) => {
  return fetch(`post/deletecomment`, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({ userId, postId, comment })
  })
    .then(res => res.json())
    .catch(err => console.log(err));
};
