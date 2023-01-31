import StarRating from "../reviews/StarRating";
import { Button, Form, Modal, Row } from "react-bootstrap";
import { MdDelete } from "react-icons/md";
import { useReviewContext } from "../../context/reviewcontext";
import UpdateReview from "./UpdateReview";
function Review({ ratingResponse }) {
    const { isDeleteReviewLoading, deleteReviewCall } = useReviewContext();
    const {
        id,
        reviewBy,
        starRating,
        reviewDescription,
        reviewDate,
        location } = ratingResponse;

    const deleteReview = (e) => {
        e.preventDefault();
        deleteReviewCall(id);
    }

    const avgStarRating = starRating;
    if (isDeleteReviewLoading) {
        return <div>Loading ...</div>
    }
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
                                <UpdateReview ratingResponse={ratingResponse} />
                                <Button className="btn-sm btn-danger">
                                    <MdDelete onClick={deleteReview} />
                                </Button>
                            </div>
                            <span className="publish py-3 d-inline-block w-100">Published on {reviewDate.slice(0, 10)} </span>
                        </div>
                    </div>
                </li>
            </ul>
        </>
    )
}

export default Review