import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema(
  {
    recieptNo: {
      type: String,
    },
    workName: {
      type: String,
    },
    clientName: {
      type: String,
    },
    piName: {
      type: String,
    },
    totalAmount: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);
const Payment=mongoose.model('payment',paymentSchema);
export default Payment;
