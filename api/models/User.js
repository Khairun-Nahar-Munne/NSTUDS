const mongoose = require("mongoose")
const jwt = require('jsonwebtoken');
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
      
    },
    email: {
        type: String,
        required: true,
        unique: true,
        
    }, password: {
        type: String,
        required: true,
    },
    profilePic: {
        type: String,
        default: "",
    },
    /*tokens : [
        {
        token : {
            type:String,
            required:true
        }
        }
    ],*/

   isAdmin:{
        type:Boolean,
        default:false,
    },
    verified:{
        type:Boolean,
        default:false
    },

},  
    { timestamps: true }
);

 /* UserSchema.methods.generateAuthToken= async function () {
    try{
        let token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET_KEY);
        this.tokens= this.tokens.concat({token:token});
        await this.save();
        return token;
    }
        
        catch(err){
            console.log(err);
    }
    
   
    
  };*/
module.exports = mongoose.model("User", UserSchema);