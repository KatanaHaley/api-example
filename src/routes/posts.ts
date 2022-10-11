import express from 'express';
import controller from '../controllers/reference';
const router = express.Router();

router.get('/references', controller.getAllReferences);
router.get('/references/:id', controller.getReference);
router.put('/references/:id', controller.updateReference);
router.delete('/references/:id', controller.deleteReference);
router.post('/references', controller.addReference);

export = router;