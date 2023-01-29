import React, { useEffect, useState } from "react";
import { FaThumbsDown } from "react-icons/fa";
import { RiCheckDoubleLine } from "react-icons/ri";
import { useProductContext } from "../../context/productcontext";
import AddReview from "./AddReview";
import Review from "./Review";
import "./review.css";
import Star from "./Star";
function Reviews({ id, ratingResponse }) {
  const { isProductReviewLoading, getProductReviews, productReviews } = useProductContext();
  useEffect(() => {
    getProductReviews(id);
  }, []);
  if (isProductReviewLoading) {
    return <div>... Loading</div>;
  }
  return (
    <>
      <AddReview id={id} />
      <div className="container">
        <div id="reviews" className="review-section">
          <div className="row">
            <div className="col-md-6">
              <table className="stars-counters">
                <tbody>
                  <Star productReviews={productReviews} />
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="review-list">
          {ratingResponse &&
            ratingResponse.map((ratingResponse) => {
              return <Review ratingResponse={ratingResponse} />;
            })}
        </div>
      </div>
    </>
  );
}

export default Reviews;
