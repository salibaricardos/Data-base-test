import * as mongoose from "mongoose";
import { User } from "../interfaces/users.interface";

const userSchema = new mongoose.Schema({
  firstName: {
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
  phone: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 8,
  },
  address: {
    city: {
      type: String,
      trim: true,
      required: true,
    },
    street: {
      type: String,
      required: true,
      trim: true,
    },
    building: {
      type: String,
      required: true,
      trim: true,
    },
    floor: {
      type: String,
      required: true,
      trim: true,
    },
    extrainfo: {
      type: String,
      trim: true,
    },
  },
});

const userModel = mongoose.model<User & mongoose.Document>("user", userSchema);

export default userModel;
