"use client";

import Button from "@/components/ui/Button";
import { useState } from "react";
import { ProductParams } from "@/types";
import { createProduct } from "@/lib/actions/product.action";

const AddProduct = () => {
  const [form, setForm] = useState<ProductParams>({
    name: "",
    description: "",
    ingredients: [],
    videoUrl: "",
    stock: 0,
    price: 0,
    discount: 0,
    image: null,
    overallRating: 0,
  });
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [img, setImg] = useState<string | null>(null);

  const handleImg = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImg(e.target.value);
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prevdata) => ({ ...prevdata, [name]: value }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Handle changes in the image input
    const file = e.target.files?.[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        // Set the selected image as base64
        setSelectedImage(reader.result as string);
        setForm((prevData) => ({
          ...prevData,
          [e.target.name]: reader.result as string,
        }));
      };

      // Convert the image to base64
      reader.readAsDataURL(file);
    }

    // Display the selected image in the other div
    // setSelectedImage(file ? URL.createObjectURL(file) : null);
    // setForm((prevData) => ({ ...prevData, [e.target.name]: file }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
    if (form.image) {
      console.log(form.image?.length / 1024);
    }

    createProduct(form);
    // const response = await fetch("/api/product", {
    //   method: "POST",
    //   body: JSON.stringify(form),
    // });

    // console.log(response);
  };
  return (
    <div>
      <form
        action=""
        className="flex-col flex gap-4 flex-wrap"
        onSubmit={handleSubmit}
      >
        <label>Name :</label>
        <input
          type="text"
          name="name"
          className="border-2 flex-1"
          value={form.name}
          onChange={handleOnChange}
        />
        <label>Desc :</label>
        <input
          type="text"
          name="description"
          className="border-2 flex-1"
          value={form.description}
          onChange={handleOnChange}
        />
        <label>Video Url :</label>
        <input
          type="text"
          name="videoUrl"
          className="border-2 flex-1"
          value={form.videoUrl}
          onChange={handleOnChange}
        />
        <label>Stock :</label>
        <input
          type="number"
          name="stock"
          className="border-2 flex-1"
          value={form.stock}
          onChange={handleOnChange}
        />
        <label>Price :</label>
        <input
          type="number"
          name="price"
          className="border-2 flex-1"
          value={form.price}
          onChange={handleOnChange}
        />
        <label>Discount :</label>
        <input
          type="number"
          name="discount"
          className="border-2 flex-1"
          value={form.discount}
          onChange={handleOnChange}
        />
        <label>Image :</label>
        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleImageChange}
        />

        <label>Image Link:</label>
        <input
          type="text"
          name="img"
          accept="image/*"
          className="border-2 flex-1"
          onChange={handleImg}
        />

        <Button
          title="submit"
          btnType="submit"
          containerStyles="bg-light text-dark btn-light-hover"
        />
      </form>

      {/* Display the selected image in another div */}
      {selectedImage && (
        <div>
          <p>Selected Image:</p>
          <img src={selectedImage} alt="Selected" />
        </div>
      )}

      {form.image && <img src={form.image} alt="Google Drive Image" />}
    </div>
  );
};

export default AddProduct;
