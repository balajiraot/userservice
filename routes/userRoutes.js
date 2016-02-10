const router = require('express').Router();
var addUser = require('../service/addUser')
var findUser = require('../service/findUser')
var findAllUser = require('../service/findAllUser')

router.get('/user/:userName',findUser)
router.get('/user/',findAllUser)
router.post('/user',addUser)

module.exports = router;
