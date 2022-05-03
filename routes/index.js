const express = require("express");
const router = express.Router();
//Router used
router.use('/products',require('./products'));
router.get('/',function(req,res){
    return res.end('Add /products in postman to check the Api');
})
module.exports = router //to export 