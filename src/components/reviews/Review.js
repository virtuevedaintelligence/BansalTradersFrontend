import StarRating from "../reviews/StarRating";
function Review({ ratingResponse }) {

    const { reviewBy,
        starRating,
        reviewDescription,
        reviewDate,
        location } = ratingResponse;
    const avgStarRating = starRating;
    return (
        <>
            <ul>
                <li>
                    <div className="d-flex">
                        <div className="left">
                        </div>
                        <div className="right">
                            <h4>
                                {reviewBy}
                                <span className="gig-rating text-body-2">
                                    <StarRating avgStarRating={avgStarRating} />
                                </span>
                            </h4>
                            <div className="country d-flex align-items-center">
                                <span>
                                    <img className="country-flag img-fluid" src="https://bootdey.com/img/Content/avatar/avatar6.png" />
                                </span>
                                <div className="country-name font-accent">{location}</div>
                            </div>
                            <div className="review-description">
                                <p>{reviewDescription}</p>
                            </div>
                            <span className="publish py-3 d-inline-block w-100">Published on {reviewDate} </span>
                        </div>
                    </div>
                </li>
            </ul>
        </>
    )
}

export default Review