const express = require("express");
const router = express.Router();
//Router used
router.use('/products',require('./products'));

module.exports = router //to export 