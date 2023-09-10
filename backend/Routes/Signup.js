const express = require('express')
const router = express.Router();
const User = require('../models/User')
const {body, validationResult} = require('express-validator');

// router.post("/signup", async(req, res) =>{
//     try{
//        await User.create({
//             name: req.body.name,
//             password: req.body.password,
//             email: req.body.email,
//             location: req.body.location
//         })
//         res.json({success:true});
//     } catch(error) {
//         console.log(error);
//         res.json({success:false});
//     }
// });

router.post("/signup",
// Putting validation
// body('name','Name must contain only alphabets and length must be more than 3').isLength({min:3}),
// body('eamil', 'Enter valid email').isEmail(),
// body('password', 'Length must be greater than 7').isLength({min:7}),

body('name','Name must contain only alphabets and length must be more than 3').isAlpha('en-US', {ignore: ' '}).isLength({min:3}),
body('email', 'Enter valid email').isEmail(),
body('password', 'Length must be greater than 7').isLength({min:7}),

(req, res) => {
    // Check Validation
    const errors = validationResult(req);
    if(!errors.isEmpty())
    {
        return res.status(400).json({errors: errors.array()});
    }

    User.create({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email,
        location: req.body.location
    })
    .then(() => {
        res.json({ success: true });
    })
    .catch((error) => {
        console.error(error);
        res.json({ success: false });
    });
});

module.exports = router;