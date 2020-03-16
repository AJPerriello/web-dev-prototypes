var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* page for information if needed */
router.get('/ajpnodeinfo', function(req, res) {
  res.render('ajpnodeinfo', { title: 'ajp node information' });
});

/* GET inventorylist page. */
router.get('/inventorylist', function(req, res) {
    var db = req.db;
    var collection = db.get('usercollection');
    collection.find({},{},function(e,docs){
        res.render('inventorylist', {
            "inventorylist" : docs
        });
    });
});

module.exports = router;
