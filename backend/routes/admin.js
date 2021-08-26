const router = require('express').Router();
let Admin = require('../models/admin.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

require('dotenv').config();




router.route('/addAdmin').post(async (req, res) => {
    const Name = req.body.Name;
    const Password = req.body.Password;

    const admin = new Admin({Name, Password});

    const salt = await bcrypt.genSalt(10);
    admin.Password = await bcrypt.hash(Password, salt);
    


    await admin.save()
            .then(() => {
                const payload = {
                  admin: {
                    Name: admin.Name
                  }
                };

                const jwtsecret = process.env.JWT_SECRET;

                jwt.sign(
                    payload, 
                    jwtsecret,
                    { expiresIn: 360000 },
                    (err, token) => {
                      if (err) throw err;
                      res.json({token});
                    }
                  )

              })
            .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;
