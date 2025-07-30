import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/\S+@\S+\.\S+/, "Please enter a valid email"],
  },

  password: {
    type: String,
    required: true,
  },
});

const userModel = mongoose.model("user", userSchema);
export default userModel;
