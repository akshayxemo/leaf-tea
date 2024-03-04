import { NextApiRequest, NextApiResponse } from "next";
import { connnectToDB } from "@/lib/database/dbConnection";
import Product from "@/models/product.model";
import { AddBase64unit } from "@/utils";

// export const POST = async (req: NextApiRequest) => {
//   try {
//     await connnectToDB();
//     // const body = await req.body;
//     console.log("in server");
//     console.log(JSON.parse(req.body));

//     // const product = new Product(req.body);
//     // await product.save();

//     return new Response("success", { status: 201 });
//   } catch (error) {
//     return new Response("something went wrong", { status: 400 });
//   }
// };
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    console.log("hittttt................");
    const { query } = req;
    const { id } = query;
    await connnectToDB();

    let product = await Product.findById(id);
    product = {
      ...product._doc,
      image: AddBase64unit(product.image) as string,
    };
    // console.log(product);
    return res.status(200).json(product);
  } catch (error) {
    console.log(error);
    return res.status(401).json({ message: "Product not found" });
  }
}
