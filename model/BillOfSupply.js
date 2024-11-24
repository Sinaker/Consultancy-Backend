import mongoose from "mongoose";

const billSchema = new mongoose.Schema(
  {
    projectId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "project",
    },
    title: {
      type: String,
      trim: true,
    },
    path: {
      type: String,
    },
    estimatedCost: {
      type: Number,
    },
    description: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);
const Bill=mongoose.model('bill',billSchema);
export default Bill;