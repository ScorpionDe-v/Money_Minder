// JSG
const express= require('express');
const { loginController, registerController } = require('../controllers/userController');
// router object
const router= express.Router()
// routers
// POST||Login user
 router.post('/login',loginController)


 // Post ||register user
  router.post('/register',registerController)
// export
module.exports=router