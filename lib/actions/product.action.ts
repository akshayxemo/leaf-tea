"use server";

import { productfields } from "@/constants";
import Product from "@/models/product.model";
import { ProductParams } from "@/types";
import { connnectToDB } from "@/utils/dbConnection";
import { handleError } from "@/utils/handleError";
// import { productfields } from "@/constants";

export const createProduct = async (productfields: ProductParams) => {
  try {
    await connnectToDB();
    console.log(productfields);
    const newProduct = new Product(productfields);
    await newProduct.save();
  } catch (error) {
    console.log(error);
    handleError(error);
  }
};

export const getProducts = async () => {
  try {
    await connnectToDB();
    const products = await Product.find({});
    return JSON.stringify(products);
  } catch (error) {
    handleError(error);
  }
};
