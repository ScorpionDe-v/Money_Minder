// JSG
const express= require('express');
const { 
    addTransection,
     getAllTransection,
     editTransection ,
     deleteTransection
} = require('../controllers/transectionCtrl');

// router object
const router= express.Router()
// routers
//add transctiom POST
router.post('/add-transection',addTransection)
//Edit transctiom POST
router.post('/edit-transection',editTransection)
// get transections

//Delete transctiom POST
router.post('/delete-transection',deleteTransection)
// get transections
router.post('/get-transection',getAllTransection)
// export
module.exports=router