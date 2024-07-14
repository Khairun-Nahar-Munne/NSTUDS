const User= require("../models/User")
const getAllUsers =async(req,res)=>{
    try{
        const user =await User.find({},{password:0});
        console.log(user)
        if(!user|| user.length===0){
            return res.status(404).json({message:"No Users Found"});
        }
        res.status(200).json(user);
    }catch(error){
        next(error);
    }

};
module.exports= getAllUsers;