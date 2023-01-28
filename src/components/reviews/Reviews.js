import React, { useState } from "react";
import { FaThumbsDown } from "react-icons/fa";
import { RiCheckDoubleLine } from "react-icons/ri";
import Review from "./Review";
import "./review.css";
import Star from "./Star";
function Reviews({ ratingResponse }) {
  var [numbers, setNumbers] = useState([]);
  numbers = [1, 2, 3, 4, 5];
  return (
    <>
      <div className="container">
        <div id="reviews" className="review-section">
          <div className="row">
            <div className="col-md-6">
              <table className="stars-counters">
                <tbody>
                  {numbers.reverse().map((number) => {
                    return <Star key={number} number={number} />;
                  })}
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
