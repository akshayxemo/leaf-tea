"use server";

import User from "@/models/user.model";
import { connnectToDB } from "../database/dbConnection";
import bcryptjs from "bcryptjs";
import { generateRandomString } from "@/utils";

export const loginUser = async (email: string, password: string) => {
  try {
    await connnectToDB();
    const user = await User.findOne({ email: email });
    if (!user) {
      throw new Error("User Not Found.");
    }

    const isOk = await bcryptjs.compare(password, user.password);
    console.log("isOk:", isOk);
    if (!isOk) {
      throw new Error("Invalid email or password");
    }
    return { data: user, error: null };
  } catch (error: any) {
    console.log("user", error.message);
    // handleError(error);
    return { data: null, error: error.message };
  }
};

export const getUserByEmail = async (email: string) => {
  try {
    await connnectToDB();
    const user = await User.findOne({ email: email });
    if (!user) {
      return null;
    }
    return user;
  } catch (error) {
    return null;
  }
};

export const createOauthUser = async ({
  name,
  email,
}: {
  name: string;
  email: string;
}) => {
  try {
    await connnectToDB();
    const genPassword = generateRandomString(8);
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(genPassword, salt);

    const newUser = new User({
      name: name,
      email: email,
      password: hashedPassword,
    });
    const saveUser = await newUser.save();
    return saveUser;
  } catch (error) {
    console.log("CreateOAuthUser: ", error);
    return null;
  }
};
