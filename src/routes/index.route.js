import express from 'express';
import { addToCart, getCart, removeFromCart, ClearCart } from '../controller/cart.controller';
import { getProducts, getP, getProductDetail, getProductCategory } from '../controller/product.controller';
import { createUser, login } from '../controller/auth.controller.js'
import { verifyToken } from '../middleware/auth.middleware';

const router=express.Router();

router.get('/products', getProducts)
router.get('/product/:id',verifyToken, getProductDetail)
router.get('/category', verifyToken, getProductCategory)
router.route('/carts')
    .post(verifyToken, addToCart)
    .get(verifyToken, getCart)
    .put(verifyToken, removeFromCart)
    .delete(verifyToken, ClearCart)
router.post('/signup', createUser)
router.post('/login', login)

export default router
