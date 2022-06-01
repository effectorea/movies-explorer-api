const router = require('express').Router();
const { getMovies, createMovie, deleteMovie } = require('../controllers/movies');
const { movieIdValidation, movieValidation } = require('../middlewares/joiValidation');
const auth = require('../middlewares/auth');

router.use(auth);

router.get('/', getMovies);
router.post('/', movieValidation, createMovie);
router.delete('/:movieId', movieIdValidation, deleteMovie);

module.exports = router;
