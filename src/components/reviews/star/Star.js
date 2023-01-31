import StarRating from "./StarRating";

function Star({ productReviews }) {
  const { totalReviews, ratingDetail } = productReviews;
  return (
    <>
      {ratingDetail && ratingDetail.
        sort(function (a, b) {
          return a.rating - b.rating;
        }).reverse().map((ratingDetail) => {
          const { rating, ratingCount } = ratingDetail;
          var avgStarRating = rating;
          const width = (ratingCount / totalReviews) * 100;
          const finalWidth = width + "%";
          return (<tr className="">
            <td>
              <span>
                <button className="fit-button fit-button-color-blue fit-button-fill-ghost fit-button-size-medium stars-filter">
                  {rating}  <StarRating avgStarRating={avgStarRating} /></button>
              </span>
            </td>
            <td className="progress-bar-container">
              <div className="fit-progressbar fit-progressbar-bar star-progress-bar">
                <div className="fit-progressbar-background">
                  <span className="progress-fill" style={{ width: finalWidth }}></span>
                </div>
              </div>
            </td>
            <td className="star-num">{totalReviews}</td>
          </tr>
          )
        })}
    </>
  );
}

export default Star;
