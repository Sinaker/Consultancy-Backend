import mongoose from 'express'

const workSchema=new mongoose.Schema({
    projectId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Project"
    },
    title:{
        type:String,
        trim:true,
    },
    path:{
        type:String,
    },
    estimatedCost:{
        type:Number,
        default:0,
    },
    description:{
        type:String,
    },
},{
    timestamps:true
})
const Work=new mongoose.model('work',workSchema);
export default Work;