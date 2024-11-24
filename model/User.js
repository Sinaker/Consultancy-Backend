import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    trim:true
  },
  lastName: {
    type: String,
    trim:true
  },
  email:{
    type:String,
    unique:true,
  },
  password:{
    type:String,
    required:true,
  },
  role:{
    type:String,
    enum:['PI','HOD','DEAN']
  },
},{
    timestamps:true,
    _id:false
});
const User = mongoose.model("user", userSchema);
export default User;