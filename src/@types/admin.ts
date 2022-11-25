import { ObjectId } from "mongoose";

export interface IAdmin {
  _id: ObjectId;
  name: string;
  email: string;
  password: string;
  token: string;
  avatar?: string;
  createdAt?: string;
  updateAt?: string;
  __v: number;
}

export interface INewAdmin
  extends Omit<
    IAdmin,
    "_id" | "avatar" | "token" | "createdAt" | "updatedAt"
  > {}
