import Button from "./Button";

const QuantityBtn = ({
  quantity,
  increment,
  decrement,
  stock,
  max,
}: {
  quantity: number;
  increment: Function;
  decrement: Function;
  stock: number;
  max: number;
}) => {
  return (
    <div className="flex gap-3 items-center flex-wrap">
      <p>Quantity :</p>
      <div className="flex gap-2 items-center">
        {quantity == 1 ? (
          <Button
            title="-"
            containerStyles="border-2 text-gray-300 font-semibold bg-gray-50"
            isDisabled={true}
          />
        ) : (
          <Button
            title="-"
            containerStyles="border-2 text-base font-semibold"
            handleClick={() => {
              decrement();
            }}
          />
        )}
        <div className="border-2 text-base font-semibold py-2 px-4 text-center rounded-md min-w-14">
          {quantity}
        </div>
        {quantity == max || quantity == stock ? (
          <Button
            title="+"
            containerStyles="border-2 text-gray-300 font-semibold bg-gray-50"
            isDisabled={true}
          />
        ) : (
          <Button
            title="+"
            containerStyles="border-2 text-base font-semibold"
            handleClick={() => {
              increment();
            }}
          />
        )}
      </div>
    </div>
  );
};

export default QuantityBtn;
