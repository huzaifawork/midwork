import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  userType: { type: String, enum: ["user", "admin"], default: "user" }, // Added userType field
  id: { type: String },
});

export default mongoose.model("User", userSchema);


