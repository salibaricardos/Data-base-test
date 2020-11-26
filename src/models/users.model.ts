import * as mongoose from "mongoose";
import { User } from "../interfaces/users.interface";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
  },
  lastName: {
    type: String,
    required: true,
    minlength: 3, 
    trim: true,
  },
  age: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    trim: true,
  },
  phoneNumber: {
    type: Number,
    trim: true,
  },
  creatingDate: {
    type: String,
    default: null,
  },
  updatingDate: {
    type: String,
    default: "The User has not been update before",
  },
});

const userModel = mongoose.model<User & mongoose.Document>("User", userSchema);

export default userModel;
