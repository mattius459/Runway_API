import express from 'express';
import { create, logIn } from '../controllers/controller.js'

const router = express.Router();

console.log(typeof(create))

router.post('/create', create);
router.post('/logIn', logIn);

export default router;