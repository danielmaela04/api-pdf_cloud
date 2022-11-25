import mongoose from "mongoose";
import { IAdmin } from "../@types";

const Schema = mongoose.Schema;

const adminSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      required: false,
    },
    token: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const AdminModel = mongoose.model<IAdmin>(
  "admin-model",
  adminSchema,
  "admin"
);
