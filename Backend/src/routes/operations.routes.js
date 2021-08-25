const {Router} = require('express');
const router = Router();

const {create,getAll,getById,update,remove} = require('../controllers/operationsController');


router.post('/',create);
router.get('/:id',getById);
router.get('/:tipo?',getAll);
router.delete('/:id',remove);
router.put('/:id',update);

module.exports = router;