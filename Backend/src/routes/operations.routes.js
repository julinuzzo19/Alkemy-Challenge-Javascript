const {Router} = require('express');
const router = Router();
const verifyToken = require('../middleware/verifyToken');

const {
  create,
  getAll,
  getById,
  update,
  remove
} = require('../controllers/operationsController');

router.post('/', verifyToken, create);
router.get('/:id', verifyToken, getById);
router.get('/:tipo?', verifyToken, getAll);
router.delete('/:id', verifyToken, remove);
router.put('/:id', verifyToken, update);

module.exports = router;
