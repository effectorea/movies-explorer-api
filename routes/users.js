const router = require('express').Router();
const { getUserInfo, updateProfile } = require('../controllers/users');
const { userProfileValidation } = require('../middlewares/joiValidation');
const { login, createUser } = require('../controllers/users');
const { userValidation, loginValidation } = require('../middlewares/joiValidation');
const auth = require('../middlewares/auth');

router.post('/signup', userValidation, createUser);
router.post('/signin', loginValidation, login);

router.use(auth);

router.get('/me', getUserInfo);
router.patch('/me', userProfileValidation, updateProfile);

module.exports = router;
