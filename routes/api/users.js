const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

router.post(
    '/',
[
    check('name', 'Name is required')
    .not().isEmpty(),
    check(
        'email',
        'Please enter a valid email').isEmail(),
    check(
        'password',
        'Please enter a password with more than 6 charecters')
        .isLength({min:6})
],
    (req,res) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({ errors: errors.array()});
        }
    console.log(req.body);  
    res.send('User route');
}); 

module.exports = router;