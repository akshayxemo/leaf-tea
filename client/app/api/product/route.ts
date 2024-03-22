import { NextApiRequest, NextApiResponse } from "next";
import { connnectToDB } from "@/lib/database/dbConnection";
import Product from "@/models/product.model";
import { AddBase64unit } from "@/utils";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  // req: NextRequest,
  // res: NextResponse,
  // { params }: { params: { id: string } }
  try {
    // console.log("hittttt................", params.id);
    // const { query } = req;
    // const { id } = query;
    // await connnectToDB();
    // console.log(req.query);
    // console.log(req.);
    // let product = await Product.findById(id);
    // product = {
    //   ...product._doc,
    //   image: AddBase64unit(product.image) as string,
    // };
    // // console.log(product);
    // return res.status(200).json("Hittttt");
    return NextResponse.json({ data: "hello" });
  } catch (error) {
    console.log(error);
    // return res.status(401).json({ message: "Product not found" });
    return NextResponse.json({ error: "fuck" });
  }
}
