/* write your server code here */
const {Router} = require('express')
const checkToken = require('../middleware/auth')
const router =router()

router.use('/api/', require('./api'))
module.exports= router