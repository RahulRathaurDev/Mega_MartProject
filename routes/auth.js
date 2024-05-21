const express = require('express');
const router = express.Router();
const User = require('../models/user');
const passport = require('passport');
const { registerForm, registerNewUser, loginForm, loginUser } = require('../controllers/auth');



router.route('/register')
    .get(registerForm)
    .post(registerNewUser)



router.route('/login')
    .get(loginForm)
    .post(passport.authenticate('local', { 
            failureRedirect: '/login',
            failureFlash: true
    }), loginUser);
        
    

    router.get('/logout', (req, res) => {
    
        req.logout(function(err) {
            if (err) { return next(err); }
            req.flash('success','Logged Out Successfully');
            res.redirect('/products');
          });
    })
    

module.exports = router;
