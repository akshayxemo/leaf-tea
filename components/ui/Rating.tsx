export const Rating = ({ rating }: { rating: number }) => {
  return (
    <div className="px-2 py-[0.35rem] bg-lime-600 rounded-md">
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
