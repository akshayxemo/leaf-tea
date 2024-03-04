export const Rating = ({ rating }: { rating: number }) => {
  return (
    <div className="px-2 py-[0.35rem] bg-lime-600 rounded-md w-12 flex justify-center">
      <h6 className="flex items-center gap-1 text-white text-xs font-bold justify-center leading-[0]">
        {rating}
        <span
          className="material-symbols-outlined"
          style={{ fontSize: "12px", fontVariationSettings: `"FILL" 1` }}
        >
          star_rate
        </span>
      </h6>
    </div>
  );
};

export const RatingAndReviews = ({
  ratingCount,
  reviewsCount,
}: {
  ratingCount: number;
  reviewsCount: number;
}) => {
  return (
    <p className="text-body text-xs font-semibold flex-1">
      {ratingCount} Rating & {reviewsCount} reviews
    </p>
  );
};

export const Rates = () => {
  return (
    <div className="">
      <Slides rate={5} counts={800} total={2000} />
      <Slides rate={4} counts={450} total={2000} />
      <Slides rate={3} counts={250} total={2000} />
      <Slides rate={2} counts={0} total={2000} />
      <Slides rate={1} counts={500} total={2000} />
    </div>
  );
};

export const Slides = ({
  rate,
  counts,
  total,
}: {
  rate: number;
  counts: number;
  total: number;
}) => {
  const colors = [
    "bg-red-500",
    "bg-orange-500",
    "bg-lime-400",
    "bg-lime-500",
    "bg-lime-600",
  ];

  const percent: string = ((counts * 100) / total).toFixed(0).toString();
  return (
    <div className="flex gap-3 items-center flex-1">
      <div className="w-4 mr-3">
        <p className="flex items-center text-sm">
          {rate}
          <span
            className="material-symbols-outlined pl-1"
            style={{ fontSize: "15px", fontVariationSettings: `"FILL" 1` }}
          >
            star_rate
          </span>
        </p>
      </div>
      <div className="max-w-[350px] h-[8px] rounded-full overflow-hidden bg-gray-200 relative flex-1">
        <div
          className={`h-[8px] ${colors[rate - 1]} rounded-full`}
          style={{ width: `${percent}%` }}
        ></div>
      </div>
      <div className="w-16">
        <p className="text-body text-xs">{counts}</p>
      </div>
    </div>
  );
};
