const router = require('express').Router();
const { getUserInfo, updateProfile } = require('../controllers/users');
const { userProfileValidation } = require('../middlewares/joiValidation');

router.get('/me', getUserInfo);
router.patch('/me', userProfileValidation, updateProfile);

module.exports = router;
