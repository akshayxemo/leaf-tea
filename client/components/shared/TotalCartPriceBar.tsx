import Button from "../ui/Button";

const TotalCartPriceBar = ({
  total,
  delivery,
}: {
  total: number;
  delivery?: number;
}) => {
  return (
    <div className="p-4 bg-[#212121] rounded-md text-white flex flex-col justify-start items-center min-w-52 sticky top-0">
      <div className="grid grid-cols-2 grid-rows-3 gap-4 mb-6">
        <div className="col-span-1 row-span-1">Sub total:</div>
        <p className="col-span-1 row-span-1 text-lime-300 font-semibold">
          ₹ {total}
        </p>
        <div className="col-span-1 row-span-1">Delivery Fee:</div>
        <p
          className={`col-span-1 row-span-1 ${
            delivery ? "text-lime-300 font-semibold" : "text-body font-normal"
          }`}
        >
          {delivery ? "₹ " + delivery : "No Charge"}
        </p>
        <div className="col-span-1 row-span-1">Grand Total:</div>
        <p className="col-span-1 row-span-1 text-lime-300 font-semibold">
          ₹ {delivery ? total + delivery : total}
        </p>
      </div>
      <Button
        title="Purchase All"
        containerStyles="bg-light text-lime-900 hover:bg-dark hover:text-white w-full"
      />
    </div>
  );
};

export default TotalCartPriceBar;
