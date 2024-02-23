import { Schema, model, models } from "mongoose";

const ProductSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  ingridients: { type: [String] },
  videoUrl: { type: String },
  stock: { type: Number, required: true },
  price: { type: Number, required: true },
  discount: { type: Number },
  image: { type: String, required: true },
  overallRating: { type: Number },
});

const Product = models.Product || model("Product", ProductSchema);

export default Product;
