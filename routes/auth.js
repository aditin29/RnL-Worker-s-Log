const router = require('express').Router();
let auth = require('../Middleware/Auth');
const Admin = require('../models/admin.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator');

require('dotenv').config();




router.get('/', auth, async (req, res) => {
    try{
        const admin = await Admin.find({Name: req.Name}).select('-Password');
        res.json(admin);
    }catch(err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
})


router.post('/adminLogin', 
    [
        check('Name', 'Name is required')
            .not()
            .isEmpty(),
        check('Password', 'Password is required').exists()
    ], async (req, res) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array()});
        }

        const {Name, Password} = req.body;

        try {

            let admin = await Admin.findOne({Name});

            if(!admin) {
                return res.status(400).json({errors: [{msg: 'Invalid Credentials'}]})
            }


            const isMatch = await bcrypt.compare(Password, admin.Password);
            if(!isMatch) {
                return res.status(400).json({errors: [{msg: 'Invalid Credentials'}]})
            }


            const payload = {
                
                Name: admin.Name
                
            };

            const jwtsecret = process.env.JWT_SECRET;

            jwt.sign(
                payload, 
                jwtsecret,
                { expiresIn: '5 days' },
                (err, token) => {
                    if (err) throw err;
                    res.json({token});
                }
            )

        }catch(err) {
            console.error(err.message);
            res.status(500).send('Server Error');
        }            
                    
               
});





module.exports = router;
