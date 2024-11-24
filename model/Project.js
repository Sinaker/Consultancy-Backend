import mongoose from "mongoose";
const projectSchema = new mongoose.Schema(
  {
    consultancyId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "consultancy",
    },
    consultStatus: {
      type: Number,
      enum: [0, 1, 2, 3],
    },
    workId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "work",
    },
    workStatus: {
      type: Number,
      enum: [0, 1, 2, 3],
    },
    billId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "bill",
    },
    billStatus: {
      type: Number,
      enum: [0, 1, 2, 3],
    },
    voucherId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "voucher",
    },
    voucherStatus: {
      type: Number,
      enum: [0, 1, 2, 3],
    },
    closureId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "closure",
    },
    closureStatus: {
      type: Number,
      enum: [0, 1, 2, 3],
    },
    departmentId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"department"
    }
  },
  {
    timestamps: true,
  }
);
const Project=mongoose.model('project',projectSchema)
export default Project;
