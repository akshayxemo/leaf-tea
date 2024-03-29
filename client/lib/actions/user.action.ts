"use server";

import User from "@/models/user.model";
import { connnectToDB } from "../database/dbConnection";
import { handleError } from "@/utils/handleError";
import bcryptjs from "bcryptjs";

export const loginUser = async (email: string, password: string) => {
  try {
    connnectToDB();
    const user = await User.findOne({ email: email });
    if (!user) {
      throw new Error("User Not Found.");
    }

    const isOk = await bcryptjs.compare(password, user.password);
    console.log("isOk:", isOk);
    if (!isOk) {
      throw new Error("invalid credentials");
    }
    return user;
  } catch (error) {
    handleError(error);
  }
};
