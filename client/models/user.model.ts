import { Schema, model, models } from "mongoose";

const UserSchema = new Schema(
  {
    OAuthId: String,
    name: String,
    email: { type: String, unique: true },
    password: String,
    address: String,
    phoneNo: String,
    pinCode: String,
    role: { type: String, enum: ["Admin", "User"], default: "User" },
    imageURL: String,
  },
  {
    timestamps: true,
  }
);

const User = models.User || model("User", UserSchema);
export default User;
