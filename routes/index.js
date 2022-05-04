const express = require("express");
const router = express.Router();
//Router used
router.get('/',function(req,res){
    return res.end('Add /products in postman to check the Api');
})
router.use('/products',require('./products'));
module.exports = router //to export 