"use client";

import { useState } from "react";
import Button from "./Button";

const QuantityBtn = () => {
  const [quantity, setQuantity] = useState(1);
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value);
    setQuantity(newValue);
  };

  const add = () => {
    setQuantity(quantity + 1);
  };

  const sub = () => {
    setQuantity(quantity == 1 ? 1 : quantity - 1);
  };

  return (
    <div className="flex gap-3 items-center flex-wrap">
      <p>Quantity :</p>
      <div className="flex gap-2 items-center">
        <Button
          title="-"
          containerStyles="border-2 text-lg font-semibold"
          handleClick={sub}
        />
        <input
          type="number"
          className="border-2 text-lg font-semibold py-2 px-4 text-center rounded-md max-w-20"
          value={quantity === 0 ? "" : quantity}
          name="quantity"
          onChange={handleOnChange}
        />
        <Button
          title="+"
          containerStyles="border-2 text-lg font-semibold"
          handleClick={add}
        />
      </div>
    </div>
  );
};

export default QuantityBtn;
