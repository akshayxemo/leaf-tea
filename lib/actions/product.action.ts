"use server";

import Product from "@/models/product.model";
import { ProductParams } from "@/types";
import { connnectToDB } from "@/lib/database/dbConnection";
import { handleError } from "@/utils/handleError";
import { AddBase64unit } from "@/utils";

export const createProduct = async (productfields: ProductParams) => {
  try {
    await connnectToDB();
    console.log(productfields);
    const newProduct = new Product(productfields);
    const result = await newProduct.save();
    console.log(result);
    // console.log(result.image.length);
    return AddBase64unit(result.image);
  } catch (error) {
    console.log(error);
    handleError(error);
  }
};

export const getProducts = async () => {
  try {
    await connnectToDB();
    const products = await Product.find({});

    // Map over the array and convert each image buffer to Base64
    const productsWithBase64Images = products.map((product) => {
      return { ...product._doc, image: AddBase64unit(product.image) as string };
    });
    // console.log(productsWithBase64Images);
    return JSON.stringify(productsWithBase64Images);
  } catch (error) {
    handleError(error);
  }
};

export const getProductById = async (id: string) => {
  try {
    await connnectToDB();
    let product = await Product.findById(id);
    product = {
      ...product._doc,
      image: AddBase64unit(product.image) as string,
    };
    // console.log(product);
    return JSON.stringify(product);
  } catch (error) {
    handleError(error);
  }
};
