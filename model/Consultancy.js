import mongoose from 'mongoose'

const consultancySchema=new mongoose.Schema({
    principalFacultyName:{
        type:String,
    },
    associatedFacultyNames:[String],
    consultancyTitle:{
        type:String,
    },
    firmName:{
        type:String,
    },
    firmEmail:{
        type:String,
    },
    firmPhone:{
        type:String,
    },
    assignmentTypes: {
        type: String, // Array of strings
    },
    natureOfWork: {
        type: String,
    },
    estimatedDuration: {
        type: String,
    },
    outOfCampusVisits: {
        type: String, // Assuming this is a number
    },
    commencementDate: {
        type: Date,
    },
    totalAmount: {
        type: String,
    },
    workOrderNo: {
        type: String,
    },
    estimateLetterNo: {
        type: String,
    },
    proposedLetterNo: {
        type: String,
    },
})

const Consultancy=mongoose.model('consultancy',consultancySchema);
export default Consultancy;