import express from 'express';
import { create, logIn, update, deleteUser} from '../controllers/controller.js'

const router = express.Router();

console.log(typeof(create))

router.post('/create', create);
router.post('/logIn', logIn);
router.put('/update', update);
router.delete('/deleteUser', deleteUser);

export default router;