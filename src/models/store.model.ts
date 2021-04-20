import * as mongoose from "mongoose";
import { Store } from "../interfaces/store.interface";

const storeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
    trim: true,
    minlength: 8,
  },
  open: {
    type: String,
    required: true,
    trim: true,
  },
  close: {
    type: String,
    trim: true,
    required: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
});

const storeModel = mongoose.model<Store & mongoose.Document>(
  "store",
  storeSchema
);

export default storeModel;
