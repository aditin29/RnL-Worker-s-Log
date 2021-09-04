const router = require('express').Router();
let Site = require('../models/site.model');
let auth = require('../Middleware/Auth');


//get sites
router.route('/').get((req, res) => {
    Site.find()
      .then(sites => res.json(sites))
      .catch(err => res.status(400).json('Error: ' + err));
  });


  //add site
router.post('/addSite', auth, (req, res) => {
    const siteName = req.body.siteName;

    const newSite = new Site({siteName});

    newSite.save()
        .then(() => res.json('Site added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});


//delete site

router.delete('/deleteSite/:id', auth, (req, res) => {
  Site.findByIdAndDelete(req.params.id)
    .then(() => res.json('Site deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});






module.exports = router;


