const express = require('express');
const {
  userById,
  allUsers,
  getUser,
  hasAuthorization,
  updateUser,
  removeUser,
  getPhotoUser,
  addFollowing,
  addFollower,
  removeFollowing,
  removeFollower,
  findPeople,
} = require('../controllers/user');
const { requireSignin } = require('../controllers/auth');

const router = express.Router();
// router.post('/',createUser)

router.put('/follow', requireSignin, addFollowing, addFollower);
router.put('/unfollow', requireSignin, removeFollowing, removeFollower);

router.get('/', allUsers);
router.get('/:userId', userById, requireSignin, getUser);
router.get('/photo/:userId', userById, getPhotoUser);
router.get('/findpeople/:userId', userById, findPeople);

router.put('/:userId', userById, requireSignin, hasAuthorization, updateUser);

router.delete('/:userId', userById, requireSignin, hasAuthorization, removeUser);

//any route containing :userId, out app will first execute userById()
//router.param('/userId', userById);

module.exports = router;
