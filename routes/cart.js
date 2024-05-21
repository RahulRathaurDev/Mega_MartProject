const express = require('express');
const router = express.Router();
const { isLoggedIn } = require('../middleware');
const Product = require('../models/product');
const User = require('../models/user');
const { showCart, addToCart} = require('../controllers/cart');

router.get('/cart',isLoggedIn,showCart)
router.post('/:productid/add',isLoggedIn, addToCart)

router.delete('/:productid/delete', async(req,res)=>{
    const {productid}=req.params;
    const user= await User.findById(req.user._id);
    const arr=user.cart.filter((ele)=>ele!=productid);
    user.cart=arr;
    await user.save();
    res.redirect('/user/cart');
})

module.exports = router;