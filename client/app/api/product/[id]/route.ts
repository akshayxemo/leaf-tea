// import { AddBase64unit } from "@/utils";
// import Product from "@/models/product.model";
// import { connnectToDB } from "@/lib/database/dbConnection";
// import { NextRequest, NextResponse } from "next/server";

// export async function GET(request: NextRequest, context: any) {
//   try {
//     const { params } = context;
//     console.log(context);
//     console.log("params: ", params);
//     await connnectToDB();
//     let product = await Product.findById(params.id);
//     product = {
//       ...product._doc,
//       image: AddBase64unit(product.image) as string,
//     };
//     return NextResponse.json(product);
//   } catch (error) {
//     return NextResponse.json({ error: error });
//   }
// }
