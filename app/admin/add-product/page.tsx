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
    image: "",
    overallRating: 0,
  });
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [img, setImg] = useState<string | null>();

  //   const handleImg = (e: React.ChangeEvent<HTMLInputElement>) => {
  //     setImg(e.target.value);
  //   };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prevdata) => ({ ...prevdata, [name]: value }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Handle changes in the image input
    const file = e.target.files?.[0];

    console.log(file);

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        // Set the selected image as base64
        setSelectedImage(reader.result as string);
        // console.log("Data URL: ", reader.result);
        const res = reader.result;
        if (typeof res === "string") {
          const c = res?.indexOf(",");
          const imageURL = res.slice(c + 1);
          console.log(c);
          console.log(imageURL);
          console.log(imageURL.length);
          setForm((prevData) => ({
            ...prevData,
            [e.target.name]: imageURL as string,
          }));
        }
      };

      // Convert the image to base64
      reader.readAsDataURL(file);
      // reader.readAsArrayBuffer(file);
      // reader.readAsText(file);
    }

    // Display the selected image in the other div
    // setSelectedImage(file ? URL.createObjectURL(file) : null);
    // setForm((prevData) => ({ ...prevData, [e.target.name]: file }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
    if (form.image) {
      console.log(form.image?.length);
    }
    const response = await createProduct(form);
    console.log(response);

    // if (response) {
    //   const imageBuf = JSON.parse(response);
    //   console.log(imageBuf.image);
    //   setImg(imageBuf.image);
    // }
    setImg(response);
  };
  return (
    <div>
      <form
        action=""
        className="flex-col flex gap-4 flex-wrap"
        onSubmit={handleSubmit}
      >
        <label htmlFor="name">Name :</label>
        <input
          type="text"
          name="name"
          id="name"
          className="border-2 flex-1"
          value={form.name}
          onChange={handleOnChange}
          required
        />
        <label>Desc :</label>
        <input
          type="text"
          name="description"
          className="border-2 flex-1"
          value={form.description}
          onChange={handleOnChange}
          required
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
          required
        />
        <label>Price :</label>
        <input
          type="number"
          name="price"
          className="border-2 flex-1"
          value={form.price}
          onChange={handleOnChange}
          required
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
          accept="image/jpg, image/png, image/jpeg"
          onChange={handleImageChange}
          required
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

      {img && <img src={img} alt="Google Drive Image" />}
    </div>
  );
};

export default AddProduct;
