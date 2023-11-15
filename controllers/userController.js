// JSG
const userModel =require('../models/userModels')
// login call back
const loginController = async (req,res)=>{
    try{
       const {email,password}=req.body;
      const user=await userModel.findOne({email,password});
      if(!user)
      {
       return  res.status(404).send('User Not Found');
      }
      res.status(200).json({
        success:true,
        user,
      });
    }catch(error)
    {
        res.status(400).json({
            success:false,
            error
        });
    }
};

// register callback
 const registerController=async (req,res)=>{
    try{
        const newUSer = new userModel(req.body)
        await newUSer.save();
        res.status(201).json({
            success:true,
            newUSer,
        });
        
    } catch(error){
        res.status(400).json({
            success:false,
            error
        });
    }
 };

module.exports={loginController,registerController};