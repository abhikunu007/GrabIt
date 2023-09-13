const express = require('express')
const router = express.Router();
const User = require('../models/User')
const { body, validationResult } = require('express-validator');

// router.post("/login",
// // Putting validation

// body('email', 'Enter valid email').isEmail(),
// body('password', 'Length must be greater than 7').isLength({min:7}),

// async (req, res) => {

//              // Check Validation
//              const errors = validationResult(req);
//              if(!errors.isEmpty())
//              {
//                  return res.status(400).json({errors: errors.array()});
//              }

//     let email = req.body.email;
//    try{

//     let usercred = await User.findOne({ email });
//         if(!usercred)
//         {
//             return res.status(400).json({errors: "Try logging with valid credentials"});   
//         }

//         if(req.body.password !== usercred.password)
//         {
//             return res.status(400).json({errors: "Please enter valid password"});
//         }

//          return res.json({ success: true });

//    }

//     catch(error) {
//         console.error(error);
//         res.json({ success: false });
//     }
// });

router.post("/login",
    // Putting validation

    [
        body('email', 'Enter valid email').isEmail(),
        body('password', 'Length must be greater than 7').isLength({ min: 7 }),

    ],
    (req, res) => {

        // Check Validation
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        let email = req.body.email;

        User.findOne({ email })
            .then(usercred => {
                if (!usercred) {
                    return res.status(400).json({ errors: "Try logging with valid credentials" });
                }

                if (req.body.password !== usercred.password) {
                    return res.status(400).json({ errors: "Please enter valid password" });
                }

                return res.json({ success: true });
            })


            .catch(error => {
                console.error(error);
                res.json({ success: false });
            });
    }
);

module.exports = router;