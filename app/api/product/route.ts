import { NextApiRequest } from "next";
import { connnectToDB } from "@/utils/dbConnection";
import Product from "@/models/product.model";

export const POST = async (req: NextApiRequest) => {
  try {
    await connnectToDB();
    // const body = await req.body;
    console.log("in server");
    console.log(JSON.parse(req.body));

    // const product = new Product(req.body);
    // await product.save();

    return new Response("success", { status: 201 });
  } catch (error) {
    return new Response("something went wrong", { status: 400 });
  }
};
