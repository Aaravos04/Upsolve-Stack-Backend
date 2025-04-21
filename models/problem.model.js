import mongoose from "mongoose";

const problemSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    platform: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      default: "Unattempted",
      enum: ["Unattempted", "In Progress", "Solved"],
    },
    notes: {
      type: String,
      default: "",
    },
    bookmark: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Problem = mongoose.model("Problem", problemSchema);
export default Problem;
