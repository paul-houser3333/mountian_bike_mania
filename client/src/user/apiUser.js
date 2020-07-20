export const getUser = (userId, token) => {
  return fetch(`/user/${userId}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }
  })
    .then(res => res.json())
    .catch(err => console.log(err));
};

export const getAllUser = () => {
  return fetch(`user`)
    .then(res => res.json())
    .catch(err => console.log(err));
};

export const findPeople = userId => {
  return fetch(`/user/findpeople/${userId}`)
    .then(res => res.json())
    .catch(err => console.log(err));
};

export const removeUser = (userId, token) => {
  return fetch(`user/${userId}`, {
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

export const update = (userId, token, user) => {
  return fetch(`user/${userId}`, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: user
  })
    .then(res => res.json())
    .catch(err => console.log(err));
};

export const updateLocalStorage = (user, next) => {
  if (typeof window !== 'undefined') {
    if (localStorage.getItem('jwt')) {
      let auth = JSON.parse(localStorage.getItem('jwt'));
      auth.user = user;
      localStorage.setItem('jwt', JSON.stringify(auth));
      next();
    }
  }
};

export const follow = (userId, token, followId) => {
  return fetch(`user/follow`, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({ userId, followId })
  })
    .then(res => res.json())
    .catch(err => console.log(err));
};

export const unfollow = (userId, token, unfollowId) => {
  return fetch(`user/unfollow`, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({ userId, unfollowId })
  })
    .then(res => res.json())
    .catch(err => console.log(err));
};

