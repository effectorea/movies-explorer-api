const router = require('express').Router();
const { getMovies, createMovie, deleteMovie } = require('../controllers/movies');
const { movieIdValidation, movieValidation } = require('../middlewares/joiValidation');
const auth = require('../middlewares/auth');

router.use(auth);

router.get('/movies', getMovies);
router.post('/movies', movieValidation, createMovie);
router.delete('/movies/:movieId', movieIdValidation, deleteMovie);

module.exports = router;
