import mongoose from 'mongoose'

const departmentSchema=new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:true
    },
    HOD:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true,
    },
},{
    timestamps:true,
})

const Department=mongoose.model('department',departmentSchema);
export default Department;