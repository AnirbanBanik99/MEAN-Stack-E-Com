var express = require('express');
var dbAbstractionLayer = require('../public/javascripts/DbAbstractionLayer');

var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {

 // setTimeout(() => {
    
 // let jsonResponse = {
 //   "handsetCards":[
 //     { imageName: 'offer1', title: '30% off on personal care', cols: 2, rows: 1 },
 //     { imageName: 'offer2', title: 'FLat 50% off on Shoes', cols: 2, rows: 1 },
 //     { imageName: 'offer3', title: 'Extended Warrenty on Electronics', cols: 2, rows: 1 },
 //     { imageName: 'offer4', title: '14% discount on Grocery', cols: 2, rows: 1 },
 //     { imageName: 'offer5', title: '60% off on Bags', cols: 2, rows: 1 },
 //     { imageName: 'offer6', title: 'FLat 50% off on Jackets', cols: 2, rows: 1 },
 //     { imageName: 'offer7', title: 'Buy 2 and get 1 Tshirts', cols: 2, rows: 1 },
 //     { imageName: 'offer8', title: '14% discount on Perfumes', cols: 2, rows: 1 }
 //   ],
 //   "webCards":[
 //     { imageName: 'offer1', title: '30% off on personal care', cols: 2, rows: 1 },
 //     { imageName: 'offer2', title: 'FLat 50% off on Shoes', cols: 1, rows: 1 },
 //     { imageName: 'offer3', title: 'Extended Warrenty on Electronics', cols: 1, rows: 2 },
 //     { imageName: 'offer4', title: '14% discount on Grocery', cols: 1, rows: 1 },
 //     { imageName: 'offer5', title: '60% off on Bags', cols: 1, rows: 2 },
 //     { imageName: 'offer6', title: 'FLat 50% off on Jackets', cols: 1, rows: 1 },
 //     { imageName: 'offer7', title: 'Buy 2 and get 1 Tshirts', cols: 1, rows: 2 },
 //     { imageName: 'offer8', title: '14% discount on Perfumes', cols: 1, rows: 1 }
 //   ]
 // };

 // res.json(jsonResponse);
 // }, 3000);

 // call query DealCollection Function
 dbAbstractionLayer.queryDealsCollection().then(response=>{
  res.json(response);
}).catch(error=>{
  res.status(500).json({});
});

});

module.exports = router;
