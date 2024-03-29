import User from "@/models/user.model";
import { connnectToDB } from "@/lib/database/dbConnection";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

connnectToDB();

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, password, phoneNo } = body;
    const existingUser = await User.findOne({ email: email });

    if (existingUser) {
      throw new Error("User Already Exist.");
    }

    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    const newUser = new User({
      name: name,
      email: email,
      password: hashedPassword,
      //   address: address,
      phoneNo: phoneNo,
    });

    const savedUser = await newUser.save();

    return NextResponse.json(
      {
        message: "User created successfully",
        success: true,
        savedUser,
      },
      { status: 200 }
    );
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 400 });
  }
}
