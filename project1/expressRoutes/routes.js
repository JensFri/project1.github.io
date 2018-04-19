
var express = require('express');
var router = express.Router();

// Require Item model in our routes module
var Process = require('../models/process');

// Defined store route
router.route('/experiments/add').post(function (req, res) {
  var process = new Process(req.body);
   process.save()
    .then(item => {
    res.status(200).json({'process': 'Process added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

router.route('/experiments').get(function (req, res) {
    Process.find(function (err, process){
     if(err){
       console.log(err);
     }
     else {
       res.json(process);
     }
   });
 });

router.route('/experiments/delete/:id').get(function (req, res) {
    Process.findByIdAndRemove({_id: req.params.id}, function(err, process){
         if(err) res.json(err);
         else res.json('Successfully removed');
     });
 });



 

module.exports = router;