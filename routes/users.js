const router = require('express').Router();
let User = require('../models/user.model');
let auth = require('../Middleware/Auth');

//get users
router.get('/', auth, (req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Errors: ' + err));
});


//get users sorted site wise
router.get('/siteSortAlpha', auth, (req, res) => {
  User.find().sort({site: 1})
      .then(users => res.json(users))
      .catch(err => res.status(400).json('Errors: ' + err));
});

//site sort
router.post('/siteSort', auth, (req, res) => {
  User.find({site: req.body.site})
      .then(users => res.json(users))
      .catch(err => res.status(400).json('Errors: ' + err));
});










router.post('/siteSortJan', auth, (req, res) => {
  User.find({"monthlyReport.Jan.site": req.body.site})
      .then(users => res.json(users))
      .catch(err => res.status(400).json('Errors: ' + err));
});


router.post('/siteSortFeb', auth, (req, res) => {
  User.find({"monthlyReport.Feb.site": req.body.site})
      .then(users => res.json(users))
      .catch(err => res.status(400).json('Errors: ' + err));
});


router.post('/siteSortMar', auth, (req, res) => {
  User.find({"monthlyReport.Mar.site": req.body.site})
      .then(users => res.json(users))
      .catch(err => res.status(400).json('Errors: ' + err));
});


router.post('/siteSortApr', auth, (req, res) => {
  User.find({"monthlyReport.Apr.site": req.body.site})
      .then(users => res.json(users))
      .catch(err => res.status(400).json('Errors: ' + err));
});

router.post('/siteSortMay', auth, (req, res) => {
  User.find({"monthlyReport.May.site": req.body.site})
      .then(users => res.json(users))
      .catch(err => res.status(400).json('Errors: ' + err));
});

router.post('/siteSortJun', auth, (req, res) => {
  User.find({"monthlyReport.Jun.site": req.body.site})
      .then(users => res.json(users))
      .catch(err => res.status(400).json('Errors: ' + err));
});


router.post('/siteSortJul', auth, (req, res) => {
  User.find({"monthlyReport.Jul.site": req.body.site})
      .then(users => res.json(users))
      .catch(err => res.status(400).json('Errors: ' + err));
});


router.post('/siteSortAug', auth, (req, res) => {
  User.find({"monthlyReport.Aug.site": req.body.site})
      .then(users => res.json(users))
      .catch(err => res.status(400).json('Errors: ' + err));
});


router.post('/siteSortSep', auth, (req, res) => {
  User.find({"monthlyReport.Sep.site": req.body.site})
      .then(users => res.json(users))
      .catch(err => res.status(400).json('Errors: ' + err));
});


router.post('/siteSortOct', auth, (req, res) => {
  User.find({"monthlyReport.Oct.site": req.body.site})
      .then(users => res.json(users))
      .catch(err => res.status(400).json('Errors: ' + err));
});


router.post('/siteSortNov', auth, (req, res) => {
  User.find({"monthlyReport.Nov.site": req.body.site})
      .then(users => res.json(users))
      .catch(err => res.status(400).json('Errors: ' + err));
});


router.post('/siteSortDec', auth, (req, res) => {
  User.find({"monthlyReport.Dec.site": req.body.site})
      .then(users => res.json(users))
      .catch(err => res.status(400).json('Errors: ' + err));
});












//get monthly report
router.get('/JanReport', auth, (req, res) => {
  User.find()
      .then(users =>  res.json(users.map(user =>[user.monthlyReport.Jan, user._id])))
      .catch(err => res.status(400).json('Errors: ' + err));
});



router.get('/FebReport', auth, (req, res) => {
  User.find()
      .then(users => res.json(users.map(user =>[user.monthlyReport.Feb, user._id])))
      .catch(err => res.status(400).json('Errors: ' + err));
});



router.get('/MarReport', auth, (req, res) => {
  User.find()
      .then(users => res.json(users.map(user =>[user.monthlyReport.Mar, user._id])))
      .catch(err => res.status(400).json('Errors: ' + err));
});



router.get('/AprReport', auth, (req, res) => {
  User.find()
      .then(users => res.json(users.map(user =>[user.monthlyReport.Apr, user._id])))
      .catch(err => res.status(400).json('Errors: ' + err));
});



router.get('/MayReport', auth, (req, res) => {
  User.find()
      .then(users => res.json(users.map(user =>[user.monthlyReport.May, user._id])))
      .catch(err => res.status(400).json('Errors: ' + err));
});



router.get('/JunReport', auth, (req, res) => {
  User.find()
      .then(users => res.json(users.map(user =>[user.monthlyReport.Jun, user._id])))
      .catch(err => res.status(400).json('Errors: ' + err));
});



router.get('/JulReport', auth, (req, res) => {
  User.find()
      .then(users => res.json(users.map(user =>[user.monthlyReport.Jul, user._id])))
      .catch(err => res.status(400).json('Errors: ' + err));
});



router.get('/AugReport', auth, (req, res) => {
  User.find()
      .then(users => res.json(users.map(user =>[user.monthlyReport.Aug, user._id])))
      .catch(err => res.status(400).json('Errors: ' + err));
});



router.get('/SepReport', auth, (req, res) => {
  User.find()
      .then(users => res.json(users.map(user =>[user.monthlyReport.Sep, user._id])))
      .catch(err => res.status(400).json('Errors: ' + err));
});



router.get('/OctReport', auth, (req, res) => {
  User.find()
      .then(users => res.json(users.map(user =>[user.monthlyReport.Oct, user._id])))
      .catch(err => res.status(400).json('Errors: ' + err));
});



router.get('/NovReport', auth, (req, res) => {
  User.find()
      .then(users => res.json(users.map(user =>([user.monthlyReport.Nov, user._id]))))
      .catch(err => res.status(400).json('Errors: ' + err));
});



router.get('/DecReport', auth, (req, res) => {
  User.find()
      .then(users => res.json(users.map(user =>[user.monthlyReport.Dec, user._id])))
      .catch(err => res.status(400).json('Errors: ' + err));
});








//add users
router.post('/add', auth, (req, res) => {
    const name = req.body.name;
    const aadharNo = req.body.aadharNo;
    const phoneNo = req.body.phoneNo;
    const address = req.body.address;
    const doj = Date.parse(req.body.doj);
    const site = req.body.site;
    const type = req.body.type;
    const uanNo = req.body.uanNo;
    const pfNo = req.body.pfNo;
    const esic = req.body.esic;
    const wagesRate = Number(req.body.wagesRate);
    const otRate = Number(req.body.otRate);
    const daRate = Number(req.body.daRate);
    const bank = req.body.bank;
    const accountNo = req.body.accountNo;
    const ifsc = req.body.ifsc;

    const newUser = new User({name, aadharNo, phoneNo, address, doj, site, type, uanNo, pfNo, esic, wagesRate, otRate, daRate, bank, accountNo, ifsc});

    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});


//delete user
router.delete('/deleteWorker/:id', auth, (req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => res.json('Worker deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});


//update user info
router.post('/updatePdetails/:id', auth, (req, res) => {
    User.findById(req.params.id)
      .then(user => {
        user.aadharNo = req.body.aadharNo;
        user.phoneNo = req.body.phoneNo;
        user.address = req.body.address;
        user.doj = Date.parse(req.body.doj);
        user.site = req.body.site;
        user.type = req.body.type;
  
        user.save()
          .then(() => res.json('User details updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });

  router.post('/updateBdetails/:id', auth, (req, res) => {
    User.findById(req.params.id)
      .then(user => {
        user.uanNo = req.body.uanNo;
        user.pfNo = req.body.pfNo;
        user.esic = req.body.esic;
        user.wagesRate = Number(req.body.wagesRate);
        user.otRate = Number(req.body.otRate);
        user.daRate = Number(req.body.daRate);
        user.bank = req.body.bank;
        user.accountNo = req.body.accountNo;
        user.ifsc = req.body.ifsc;
  
        user.save()
          .then(() => res.json('User details updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });




//resetting monthly Report
  router.post('/resetJan/:id', auth,(req, res) => {
    User.findById(req.params.id)
      .then(user => {
        user.monthlyReport.Jan.presentDays = 0;
        user.monthlyReport.Jan.otHrs = 0;
        user.monthlyReport.Jan.basicWages = 0;
        user.monthlyReport.Jan.daWages = 0;
        user.monthlyReport.Jan.otAmt = 0;
        user.monthlyReport.Jan.hra = 0;
        user.monthlyReport.Jan.totalWages = 0;
        user.monthlyReport.Jan.pf = 0;
        user.monthlyReport.Jan.esic = 0;
        user.monthlyReport.Jan.pt = 0;
        user.monthlyReport.Jan.adv = 0;
        user.monthlyReport.Jan.totDeduction = 0;
        user.monthlyReport.Jan.fPay = 0;
        user.monthlyReport.Jan.site = "NA";
  
        user.save()
          .then(() => res.json('Jan Reset done!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });



  router.post('/resetFeb/:id', auth,(req, res) => {
    User.findById(req.params.id)
      .then(user => {
        user.monthlyReport.Feb.presentDays = 0;
        user.monthlyReport.Feb.otHrs = 0;
        user.monthlyReport.Feb.basicWages = 0;
        user.monthlyReport.Feb.daWages = 0;
        user.monthlyReport.Feb.otAmt = 0;
        user.monthlyReport.Feb.hra = 0;
        user.monthlyReport.Feb.totalWages = 0;
        user.monthlyReport.Feb.pf = 0;
        user.monthlyReport.Feb.esic = 0;
        user.monthlyReport.Feb.pt = 0;
        user.monthlyReport.Feb.adv = 0;
        user.monthlyReport.Feb.totDeduction = 0;
        user.monthlyReport.Feb.fPay = 0;
        user.monthlyReport.Feb.site = "NA";
  
        user.save()
          .then(() => res.json('Feb Reset done!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });


  router.post('/resetMar/:id', auth,(req, res) => {
    User.findById(req.params.id)
      .then(user => {
        user.monthlyReport.Mar.presentDays = 0;
        user.monthlyReport.Mar.otHrs = 0;
        user.monthlyReport.Mar.basicWages = 0;
        user.monthlyReport.Mar.daWages = 0;
        user.monthlyReport.Mar.otAmt = 0;
        user.monthlyReport.Mar.hra = 0;
        user.monthlyReport.Mar.totalWages = 0;
        user.monthlyReport.Mar.pf = 0;
        user.monthlyReport.Mar.esic = 0;
        user.monthlyReport.Mar.pt = 0;
        user.monthlyReport.Mar.adv = 0;
        user.monthlyReport.Mar.totDeduction = 0;
        user.monthlyReport.Mar.fPay = 0;
        user.monthlyReport.Mar.site = "NA";
  
        user.save()
          .then(() => res.json('Mar Reset done!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });


  router.post('/resetApr/:id', auth,(req, res) => {
    User.findById(req.params.id)
      .then(user => {
        user.monthlyReport.Apr.presentDays = 0;
        user.monthlyReport.Apr.otHrs = 0;
        user.monthlyReport.Apr.basicWages = 0;
        user.monthlyReport.Apr.daWages = 0;
        user.monthlyReport.Apr.otAmt = 0;
        user.monthlyReport.Apr.hra = 0;
        user.monthlyReport.Apr.totalWages = 0;
        user.monthlyReport.Apr.pf = 0;
        user.monthlyReport.Apr.esic = 0;
        user.monthlyReport.Apr.pt = 0;
        user.monthlyReport.Apr.adv = 0;
        user.monthlyReport.Apr.totDeduction = 0;
        user.monthlyReport.Apr.fPay = 0;
        user.monthlyReport.Apr.site = "NA";
  
        user.save()
          .then(() => res.json('Apr Reset done!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });


  router.post('/resetMay/:id', auth,(req, res) => {
    User.findById(req.params.id)
      .then(user => {
        user.monthlyReport.May.presentDays = 0;
        user.monthlyReport.May.otHrs = 0;
        user.monthlyReport.May.basicWages = 0;
        user.monthlyReport.May.daWages = 0;
        user.monthlyReport.May.otAmt = 0;
        user.monthlyReport.May.hra = 0;
        user.monthlyReport.May.totalWages = 0;
        user.monthlyReport.May.pf = 0;
        user.monthlyReport.May.esic = 0;
        user.monthlyReport.May.pt = 0;
        user.monthlyReport.May.adv = 0;
        user.monthlyReport.May.totDeduction = 0;
        user.monthlyReport.May.fPay = 0;
        user.monthlyReport.May.site = "NA";
  
        user.save()
          .then(() => res.json('May Reset done!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });


  router.post('/resetJun/:id', auth,(req, res) => {
    User.findById(req.params.id)
      .then(user => {
        user.monthlyReport.Jun.presentDays = 0;
        user.monthlyReport.Jun.otHrs = 0;
        user.monthlyReport.Jun.basicWages = 0;
        user.monthlyReport.Jun.daWages = 0;
        user.monthlyReport.Jun.otAmt = 0;
        user.monthlyReport.Jun.hra = 0;
        user.monthlyReport.Jun.totalWages = 0;
        user.monthlyReport.Jun.pf = 0;
        user.monthlyReport.Jun.esic = 0;
        user.monthlyReport.Jun.pt = 0;
        user.monthlyReport.Jun.adv = 0;
        user.monthlyReport.Jun.totDeduction = 0;
        user.monthlyReport.Jun.fPay = 0;
        user.monthlyReport.Jun.site = "NA";
  
        user.save()
          .then(() => res.json('Jun Reset done!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });


  router.post('/resetJul/:id', auth,(req, res) => {
    User.findById(req.params.id)
      .then(user => {
        user.monthlyReport.Jul.presentDays = 0;
        user.monthlyReport.Jul.otHrs = 0;
        user.monthlyReport.Jul.basicWages = 0;
        user.monthlyReport.Jul.daWages = 0;
        user.monthlyReport.Jul.otAmt = 0;
        user.monthlyReport.Jul.hra = 0;
        user.monthlyReport.Jul.totalWages = 0;
        user.monthlyReport.Jul.pf = 0;
        user.monthlyReport.Jul.esic = 0;
        user.monthlyReport.Jul.pt = 0;
        user.monthlyReport.Jul.adv = 0;
        user.monthlyReport.Jul.totDeduction = 0;
        user.monthlyReport.Jul.fPay = 0;
        user.monthlyReport.Jul.site = "NA";
  
        user.save()
          .then(() => res.json('Jul Reset done!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });


  router.post('/resetAug/:id', auth,(req, res) => {
    User.findById(req.params.id)
      .then(user => {
        user.monthlyReport.Aug.presentDays = 0;
        user.monthlyReport.Aug.otHrs = 0;
        user.monthlyReport.Aug.basicWages = 0;
        user.monthlyReport.Aug.daWages = 0;
        user.monthlyReport.Aug.otAmt = 0;
        user.monthlyReport.Aug.hra = 0;
        user.monthlyReport.Aug.totalWages = 0;
        user.monthlyReport.Aug.pf = 0;
        user.monthlyReport.Aug.esic = 0;
        user.monthlyReport.Aug.pt = 0;
        user.monthlyReport.Aug.adv = 0;
        user.monthlyReport.Aug.totDeduction = 0;
        user.monthlyReport.Aug.fPay = 0;
        user.monthlyReport.Aug.site = "NA";
  
        user.save()
          .then(() => res.json('Aug Reset done!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });


  router.post('/resetSep/:id', auth,(req, res) => {
    User.findById(req.params.id)
      .then(user => {
        user.monthlyReport.Sep.presentDays = 0;
        user.monthlyReport.Sep.otHrs = 0;
        user.monthlyReport.Sep.basicWages = 0;
        user.monthlyReport.Sep.daWages = 0;
        user.monthlyReport.Sep.otAmt = 0;
        user.monthlyReport.Sep.hra = 0;
        user.monthlyReport.Sep.totalWages = 0;
        user.monthlyReport.Sep.pf = 0;
        user.monthlyReport.Sep.esic = 0;
        user.monthlyReport.Sep.pt = 0;
        user.monthlyReport.Sep.adv = 0;
        user.monthlyReport.Sep.totDeduction = 0;
        user.monthlyReport.Sep.fPay = 0;
        user.monthlyReport.Sep.site = "NA";
  
        user.save()
          .then(() => res.json('Sep Reset done!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });


  router.post('/resetOct/:id', auth,(req, res) => {
    User.findById(req.params.id)
      .then(user => {
        user.monthlyReport.Oct.presentDays = 0;
        user.monthlyReport.Oct.otHrs = 0;
        user.monthlyReport.Oct.basicWages = 0;
        user.monthlyReport.Oct.daWages = 0;
        user.monthlyReport.Oct.otAmt = 0;
        user.monthlyReport.Oct.hra = 0;
        user.monthlyReport.Oct.totalWages = 0;
        user.monthlyReport.Oct.pf = 0;
        user.monthlyReport.Oct.esic = 0;
        user.monthlyReport.Oct.pt = 0;
        user.monthlyReport.Oct.adv = 0;
        user.monthlyReport.Oct.totDeduction = 0;
        user.monthlyReport.Oct.fPay = 0;
        user.monthlyReport.Oct.site = "NA";
  
        user.save()
          .then(() => res.json('Oct Reset done!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });


  router.post('/resetNov/:id', auth,(req, res) => {
    User.findById(req.params.id)
      .then(user => {
        user.monthlyReport.Nov.presentDays = 0;
        user.monthlyReport.Nov.otHrs = 0;
        user.monthlyReport.Nov.basicWages = 0;
        user.monthlyReport.Nov.daWages = 0;
        user.monthlyReport.Nov.otAmt = 0;
        user.monthlyReport.Nov.hra = 0;
        user.monthlyReport.Nov.totalWages = 0;
        user.monthlyReport.Nov.pf = 0;
        user.monthlyReport.Nov.esic = 0;
        user.monthlyReport.Nov.pt = 0;
        user.monthlyReport.Nov.adv = 0;
        user.monthlyReport.Nov.totDeduction = 0;
        user.monthlyReport.Nov.fPay = 0;
        user.monthlyReport.Nov.site = "NA";
  
        user.save()
          .then(() => res.json('Nov Reset done!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });


  router.post('/resetDec/:id', auth,(req, res) => {
    User.findById(req.params.id)
      .then(user => {
        user.monthlyReport.Dec.presentDays = 0;
        user.monthlyReport.Dec.otHrs = 0;
        user.monthlyReport.Dec.basicWages = 0;
        user.monthlyReport.Dec.daWages = 0;
        user.monthlyReport.Dec.otAmt = 0;
        user.monthlyReport.Dec.hra = 0;
        user.monthlyReport.Dec.totalWages = 0;
        user.monthlyReport.Dec.pf = 0;
        user.monthlyReport.Dec.esic = 0;
        user.monthlyReport.Dec.pt = 0;
        user.monthlyReport.Dec.adv = 0;
        user.monthlyReport.Dec.totDeduction = 0;
        user.monthlyReport.Dec.fPay = 0;
        user.monthlyReport.Dec.site = "NA";
  
        user.save()
          .then(() => res.json('Dec Reset done!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });


 router.get('/getJanAdvLwf/:id', auth, (req, res) => {
   User.findById(req.params.id)
   .then(user => res.json(user.monthlyReport.Jan.adv, user.monthlyReport.Jan.lwf))
   .catch(err => res.status(400).json('Errors: ' + err));
 })




//Adv updates
  router.post('/updateJanAdv/:id', auth, (req, res) => {
    User.findById(req.params.id)
      .then(user => {
        user.monthlyReport.Jan.adv = user.monthlyReport.Jan.adv + Number(req.body.adv);
  
        user.save()
          .then(() => res.json('Jan Advance updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });



  router.post('/updateFebAdv/:id', auth, (req, res) => {
    User.findById(req.params.id)
      .then(user => {
        user.monthlyReport.Feb.adv = user.monthlyReport.Feb.adv + Number(req.body.adv);
  
        user.save()
          .then(() => res.json('Feb Advance updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });


  router.post('/updateMarAdv/:id', auth, (req, res) => {
    User.findById(req.params.id)
      .then(user => {
        user.monthlyReport.Mar.adv = user.monthlyReport.Mar.adv + Number(req.body.adv);
  
        user.save()
          .then(() => res.json('Mar Advance updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });


  router.post('/updateAprAdv/:id', auth, (req, res) => {
    User.findById(req.params.id)
      .then(user => {
        user.monthlyReport.Apr.adv = user.monthlyReport.Apr.adv + Number(req.body.adv);
  
        user.save()
          .then(() => res.json('Apr Advance updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });


  router.post('/updateMayAdv/:id', auth, (req, res) => {
    User.findById(req.params.id)
      .then(user => {
        user.monthlyReport.May.adv = user.monthlyReport.May.adv + Number(req.body.adv);
  
        user.save()
          .then(() => res.json('May Advance updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });


  router.post('/updateJunAdv/:id', auth, (req, res) => {
    User.findById(req.params.id)
      .then(user => {
        user.monthlyReport.Jun.adv = user.monthlyReport.Jun.adv + Number(req.body.adv);
  
        user.save()
          .then(() => res.json('Jun Advance updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });


  router.post('/updateJulAdv/:id', auth, (req, res) => {
    User.findById(req.params.id)
      .then(user => {
        user.monthlyReport.Jul.adv = user.monthlyReport.Jul.adv + Number(req.body.adv);
  
        user.save()
          .then(() => res.json('Jul Advance updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });


  router.post('/updateAugAdv/:id', auth, (req, res) => {
    User.findById(req.params.id)
      .then(user => {
        user.monthlyReport.Aug.adv = user.monthlyReport.Aug.adv + Number(req.body.adv);
  
        user.save()
          .then(() => res.json('Aug Advance updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });


  router.post('/updateSepAdv/:id', auth, (req, res) => {
    User.findById(req.params.id)
      .then(user => {
        user.monthlyReport.Sep.adv = user.monthlyReport.Sep.adv + Number(req.body.adv);
  
        user.save()
          .then(() => res.json('Sep Advance updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });


  router.post('/updateOctAdv/:id', auth, (req, res) => {
    User.findById(req.params.id)
      .then(user => {
        user.monthlyReport.Oct.adv = user.monthlyReport.Oct.adv + Number(req.body.adv);
  
        user.save()
          .then(() => res.json('Oct Advance updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });


  router.post('/updateNovAdv/:id', auth, (req, res) => {
    User.findById(req.params.id)
      .then(user => {
        user.monthlyReport.Nov.adv = user.monthlyReport.Nov.adv + Number(req.body.adv);
  
        user.save()
          .then(() => res.json('Nov Advance updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });


  router.post('/updateDecAdv/:id', auth, (req, res) => {
    User.findById(req.params.id)
      .then(user => {
        user.monthlyReport.Dec.adv = user.monthlyReport.Dec.adv + Number(req.body.adv);
  
        user.save()
          .then(() => res.json('Dec Advance updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });







//MonthlyReport Updates
  router.post('/updateJanReport/:id', auth, (req, res) => {
    User.findById(req.params.id)
      .then(user => {
        user.monthlyReport.Jan.presentDays = Number(req.body.presentDays);
        user.monthlyReport.Jan.otHrs = Number(req.body.otHrs);
        user.monthlyReport.Jan.basicWages = Number(req.body.basicWages);
        user.monthlyReport.Jan.daWages = Number(req.body.daWages);
        user.monthlyReport.Jan.otAmt = Number(req.body.otAmt);
        user.monthlyReport.Jan.hra = Number(req.body.hra);
        user.monthlyReport.Jan.totalWages = Number(req.body.totalWages);
        user.monthlyReport.Jan.pf = Number(req.body.pf);
        user.monthlyReport.Jan.esic = Number(req.body.esic);
        user.monthlyReport.Jan.pt = Number(req.body.pt);
        //user.monthlyReport.Jan.lwf = Number(req.body.lwf);
        //user.monthlyReport.Jan.adv = Number(req.body.adv);
        user.monthlyReport.Jan.totDeduction = Number(req.body.totDeduction);
        user.monthlyReport.Jan.fPay = Number(req.body.fPay);
        user.monthlyReport.Jan.site = req.body.site;
  
        user.save()
          .then(() => res.json('Jan report updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });


  router.post('/updateFebReport/:id', auth, (req, res) => {
    User.findById(req.params.id)
      .then(user => {
        user.monthlyReport.Feb.presentDays = Number(req.body.presentDays);
        user.monthlyReport.Feb.otHrs = Number(req.body.otHrs);
        user.monthlyReport.Feb.basicWages = Number(req.body.basicWages);
        user.monthlyReport.Feb.daWages = Number(req.body.daWages);
        user.monthlyReport.Feb.otAmt = Number(req.body.otAmt);
        user.monthlyReport.Feb.hra = Number(req.body.hra);
        user.monthlyReport.Feb.totalWages = Number(req.body.totalWages);
        user.monthlyReport.Feb.pf = Number(req.body.pf);
        user.monthlyReport.Feb.esic = Number(req.body.esic);
        user.monthlyReport.Feb.pt = Number(req.body.pt);
        //user.monthlyReport.Feb.lwf = Number(req.body.lwf);
        //user.monthlyReport.Feb.adv = Number(req.body.adv);
        user.monthlyReport.Feb.totDeduction = Number(req.body.totDeduction);
        user.monthlyReport.Feb.fPay = Number(req.body.fPay);
        user.monthlyReport.Feb.site = req.body.site;
  
        user.save()
          .then(() => res.json('Feb report updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });

  router.post('/updateMarReport/:id', auth, (req, res) => {
    User.findById(req.params.id)
      .then(user => {
        user.monthlyReport.Mar.presentDays = Number(req.body.presentDays);
        user.monthlyReport.Mar.otHrs = Number(req.body.otHrs);
        user.monthlyReport.Mar.basicWages = Number(req.body.basicWages);
        user.monthlyReport.Mar.daWages = Number(req.body.daWages);
        user.monthlyReport.Mar.otAmt = Number(req.body.otAmt);
        user.monthlyReport.Mar.hra = Number(req.body.hra);
        user.monthlyReport.Mar.totalWages = Number(req.body.totalWages);
        user.monthlyReport.Mar.pf = Number(req.body.pf);
        user.monthlyReport.Mar.esic = Number(req.body.esic);
        user.monthlyReport.Mar.pt = Number(req.body.pt);
        //user.monthlyReport.Mar.lwf = Number(req.body.lwf);
        //user.monthlyReport.Mar.adv = Number(req.body.adv);
        user.monthlyReport.Mar.totDeduction = Number(req.body.totDeduction);
        user.monthlyReport.Mar.fPay = Number(req.body.fPay);
        user.monthlyReport.Mar.site = req.body.site;
  
        user.save()
          .then(() => res.json('Mar report updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });

  router.post('/updateAprReport/:id', auth, (req, res) => {
    User.findById(req.params.id)
      .then(user => {
        user.monthlyReport.Apr.presentDays = Number(req.body.presentDays);
        user.monthlyReport.Apr.otHrs = Number(req.body.otHrs);
        user.monthlyReport.Apr.basicWages = Number(req.body.basicWages);
        user.monthlyReport.Apr.daWages = Number(req.body.daWages);
        user.monthlyReport.Apr.otAmt = Number(req.body.otAmt);
        user.monthlyReport.Apr.hra = Number(req.body.hra);
        user.monthlyReport.Apr.totalWages = Number(req.body.totalWages);
        user.monthlyReport.Apr.pf = Number(req.body.pf);
        user.monthlyReport.Apr.esic = Number(req.body.esic);
        user.monthlyReport.Apr.pt = Number(req.body.pt);
        //user.monthlyReport.Apr.lwf = Number(req.body.lwf);
        //user.monthlyReport.Apr.adv = Number(req.body.adv);
        user.monthlyReport.Apr.totDeduction = Number(req.body.totDeduction);
        user.monthlyReport.Apr.fPay = Number(req.body.fPay);
        user.monthlyReport.Apr.site = req.body.site;
  
        user.save()
          .then(() => res.json('Apr report updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });

  router.post('/updateMayReport/:id', auth, (req, res) => {
    User.findById(req.params.id)
      .then(user => {
        user.monthlyReport.May.presentDays = Number(req.body.presentDays);
        user.monthlyReport.May.otHrs = Number(req.body.otHrs);
        user.monthlyReport.May.basicWages = Number(req.body.basicWages);
        user.monthlyReport.May.daWages = Number(req.body.daWages);
        user.monthlyReport.May.otAmt = Number(req.body.otAmt);
        user.monthlyReport.May.hra = Number(req.body.hra);
        user.monthlyReport.May.totalWages = Number(req.body.totalWages);
        user.monthlyReport.May.pf = Number(req.body.pf);
        user.monthlyReport.May.esic = Number(req.body.esic);
        user.monthlyReport.May.pt = Number(req.body.pt);
        //user.monthlyReport.May.lwf = Number(req.body.lwf);
        //user.monthlyReport.May.adv = Number(req.body.adv);
        user.monthlyReport.May.totDeduction = Number(req.body.totDeduction);
        user.monthlyReport.May.fPay = Number(req.body.fPay);
        user.monthlyReport.May.site = req.body.site;
  
        user.save()
          .then(() => res.json('May report updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });




  router.post('/updateJunReport/:id', auth, (req, res) => {
    User.findById(req.params.id)
      .then(user => {
        user.monthlyReport.Jun.presentDays = Number(req.body.presentDays);
        user.monthlyReport.Jun.otHrs = Number(req.body.otHrs);
        user.monthlyReport.Jun.basicWages = Number(req.body.basicWages);
        user.monthlyReport.Jun.daWages = Number(req.body.daWages);
        user.monthlyReport.Jun.otAmt = Number(req.body.otAmt);
        user.monthlyReport.Jun.hra = Number(req.body.hra);
        user.monthlyReport.Jun.totalWages = Number(req.body.totalWages);
        user.monthlyReport.Jun.pf = Number(req.body.pf);
        user.monthlyReport.Jun.esic = Number(req.body.esic);
        user.monthlyReport.Jun.pt = Number(req.body.pt);
        //user.monthlyReport.Jun.lwf = Number(req.body.lwf);
        //user.monthlyReport.Jun.adv = Number(req.body.adv);
        user.monthlyReport.Jun.totDeduction = Number(req.body.totDeduction);
        user.monthlyReport.Jun.fPay = Number(req.body.fPay);
        user.monthlyReport.Jun.site = req.body.site;
  
        user.save()
          .then(() => res.json('Jun report updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });


  router.post('/updateJulReport/:id', auth, (req, res) => {
    User.findById(req.params.id)
      .then(user => {
        user.monthlyReport.Jul.presentDays = Number(req.body.presentDays);
        user.monthlyReport.Jul.otHrs = Number(req.body.otHrs);
        user.monthlyReport.Jul.basicWages = Number(req.body.basicWages);
        user.monthlyReport.Jul.daWages = Number(req.body.daWages);
        user.monthlyReport.Jul.otAmt = Number(req.body.otAmt);
        user.monthlyReport.Jul.hra = Number(req.body.hra);
        user.monthlyReport.Jul.totalWages = Number(req.body.totalWages);
        user.monthlyReport.Jul.pf = Number(req.body.pf);
        user.monthlyReport.Jul.esic = Number(req.body.esic);
        user.monthlyReport.Jul.pt = Number(req.body.pt);
        //user.monthlyReport.Jul.lwf = Number(req.body.lwf);
        //user.monthlyReport.Jul.adv = Number(req.body.adv);
        user.monthlyReport.Jul.totDeduction = Number(req.body.totDeduction);
        user.monthlyReport.Jul.fPay = Number(req.body.fPay);
        user.monthlyReport.Jul.site = req.body.site;
  
        user.save()
          .then(() => res.json('Jul report updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });


  router.post('/updateAugReport/:id', auth, (req, res) => {
    User.findById(req.params.id)
      .then(user => {
        user.monthlyReport.Aug.presentDays = Number(req.body.presentDays);
        user.monthlyReport.Aug.otHrs = Number(req.body.otHrs);
        user.monthlyReport.Aug.basicWages = Number(req.body.basicWages);
        user.monthlyReport.Aug.daWages = Number(req.body.daWages);
        user.monthlyReport.Aug.otAmt = Number(req.body.otAmt);
        user.monthlyReport.Aug.hra = Number(req.body.hra);
        user.monthlyReport.Aug.totalWages = Number(req.body.totalWages);
        user.monthlyReport.Aug.pf = Number(req.body.pf);
        user.monthlyReport.Aug.esic = Number(req.body.esic);
        user.monthlyReport.Aug.pt = Number(req.body.pt);
        //user.monthlyReport.Aug.lwf = Number(req.body.lwf);
        //user.monthlyReport.Aug.adv = Number(req.body.adv);
        user.monthlyReport.Aug.totDeduction = Number(req.body.totDeduction);
        user.monthlyReport.Aug.fPay = Number(req.body.fPay);
        user.monthlyReport.Aug.site = req.body.site;
  
        user.save()
          .then(() => res.json('Aug report updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });




  router.post('/updateSepReport/:id', auth, (req, res) => {
    User.findById(req.params.id)
      .then(user => {
        user.monthlyReport.Sep.presentDays = Number(req.body.presentDays);
        user.monthlyReport.Sep.otHrs = Number(req.body.otHrs);
        user.monthlyReport.Sep.basicWages = Number(req.body.basicWages);
        user.monthlyReport.Sep.daWages = Number(req.body.daWages);
        user.monthlyReport.Sep.otAmt = Number(req.body.otAmt);
        user.monthlyReport.Sep.hra = Number(req.body.hra);
        user.monthlyReport.Sep.totalWages = Number(req.body.totalWages);
        user.monthlyReport.Sep.pf = Number(req.body.pf);
        user.monthlyReport.Sep.esic = Number(req.body.esic);
        user.monthlyReport.Sep.pt = Number(req.body.pt);
        //user.monthlyReport.Sep.lwf = Number(req.body.lwf);
        //user.monthlyReport.Sep.adv = Number(req.body.adv);
        user.monthlyReport.Sep.totDeduction = Number(req.body.totDeduction);
        user.monthlyReport.Sep.fPay = Number(req.body.fPay);
        user.monthlyReport.Sep.site = req.body.site;
  
        user.save()
          .then(() => res.json('Sep report updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });


  router.post('/updateOctReport/:id', auth, (req, res) => {
    User.findById(req.params.id)
      .then(user => {
        user.monthlyReport.Oct.presentDays = Number(req.body.presentDays);
        user.monthlyReport.Oct.otHrs = Number(req.body.otHrs);
        user.monthlyReport.Oct.basicWages = Number(req.body.basicWages);
        user.monthlyReport.Oct.daWages = Number(req.body.daWages);
        user.monthlyReport.Oct.otAmt = Number(req.body.otAmt);
        user.monthlyReport.Oct.hra = Number(req.body.hra);
        user.monthlyReport.Oct.totalWages = Number(req.body.totalWages);
        user.monthlyReport.Oct.pf = Number(req.body.pf);
        user.monthlyReport.Oct.esic = Number(req.body.esic);
        user.monthlyReport.Oct.pt = Number(req.body.pt);
        //user.monthlyReport.Oct.lwf = Number(req.body.lwf);
        //user.monthlyReport.Oct.adv = Number(req.body.adv);
        user.monthlyReport.Oct.totDeduction = Number(req.body.totDeduction);
        user.monthlyReport.Oct.fPay = Number(req.body.fPay);
        user.monthlyReport.Oct.site = req.body.site;
  
        user.save()
          .then(() => res.json('Oct report updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });


  router.post('/updateNovReport/:id', auth, (req, res) => {
    User.findById(req.params.id)
      .then(user => {
        user.monthlyReport.Nov.presentDays = Number(req.body.presentDays);
        user.monthlyReport.Nov.otHrs = Number(req.body.otHrs);
        user.monthlyReport.Nov.basicWages = Number(req.body.basicWages);
        user.monthlyReport.Nov.daWages = Number(req.body.daWages);
        user.monthlyReport.Nov.otAmt = Number(req.body.otAmt);
        user.monthlyReport.Nov.hra = Number(req.body.hra);
        user.monthlyReport.Nov.totalWages = Number(req.body.totalWages);
        user.monthlyReport.Nov.pf = Number(req.body.pf);
        user.monthlyReport.Nov.esic = Number(req.body.esic);
        user.monthlyReport.Nov.pt = Number(req.body.pt);
        //user.monthlyReport.Nov.lwf = Number(req.body.lwf);
        //user.monthlyReport.Nov.adv = Number(req.body.adv);
        user.monthlyReport.Nov.totDeduction = Number(req.body.totDeduction);
        user.monthlyReport.Nov.fPay = Number(req.body.fPay);
        user.monthlyReport.Nov.site = req.body.site;
  
        user.save()
          .then(() => res.json('Nov report updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });



  router.post('/updateDecReport/:id', auth, (req, res) => {
    User.findById(req.params.id)
      .then(user => {
        user.monthlyReport.Dec.presentDays = Number(req.body.presentDays);
        user.monthlyReport.Dec.otHrs = Number(req.body.otHrs);
        user.monthlyReport.Dec.basicWages = Number(req.body.basicWages);
        user.monthlyReport.Dec.daWages = Number(req.body.daWages);
        user.monthlyReport.Dec.otAmt = Number(req.body.otAmt);
        user.monthlyReport.Dec.hra = Number(req.body.hra);
        user.monthlyReport.Dec.totalWages = Number(req.body.totalWages);
        user.monthlyReport.Dec.pf = Number(req.body.pf);
        user.monthlyReport.Dec.esic = Number(req.body.esic);
        user.monthlyReport.Dec.pt = Number(req.body.pt);
        //user.monthlyReport.Dec.lwf = Number(req.body.lwf);
        //user.monthlyReport.Dec.adv = Number(req.body.adv);
        user.monthlyReport.Dec.totDeduction = Number(req.body.totDeduction);
        user.monthlyReport.Dec.fPay = Number(req.body.fPay);
        user.monthlyReport.Dec.site = req.body.site;
  
        user.save()
          .then(() => res.json('Dec report updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });



module.exports = router;



