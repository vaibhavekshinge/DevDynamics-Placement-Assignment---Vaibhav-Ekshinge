import { Router } from 'express';
import { addItemToCart } from '../controllers/cart.controller.js';

const router = Router();

router.route('/addtocart').post(addItemToCart);

export default router;
