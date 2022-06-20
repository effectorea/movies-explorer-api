const router = require('express').Router();
const { getMovies, createMovie, deleteMovie, likeMovie, dislikeMovie } = require('../controllers/movies');
const { movieIdValidation, movieValidation } = require('../middlewares/joiValidation');
const auth = require('../middlewares/auth');

router.use(auth);

router.get('/movies', getMovies);
router.post('/movies', movieValidation, createMovie);
router.put('/movies/:movieId', movieIdValidation, likeMovie);
router.delete('/movies/:movieId', movieIdValidation, dislikeMovie);
router.delete('/movies/:movieId', movieIdValidation, deleteMovie);

module.exports = router;
