import { Schema, model, models } from "mongoose";

const ProductSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    ingridients: { type: [String] },
    videoUrl: { type: String },
    stock: { type: Number, required: true },
    price: { type: Number, required: true },
    discount: { type: Number, default: 0 },
    image: { type: String, required: true },
    overallRating: { type: Number, default: 0 },
    rating: [
      {
        userId: { type: Schema.Types.ObjectId, ref: "User" },
        rate: { type: Number },
        review: { type: String },
        date: { type: Date, default: Date.now },
        update: { type: Date, default: null },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Product = models.Product || model("Product", ProductSchema);

export default Product;
