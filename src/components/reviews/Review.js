import React from 'react'

function Review({ ratingResponse }) {

    const { reviewBy,
        starRating,
        reviewDescription,
        reviewDate,
        location } = ratingResponse;
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
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792" width="15" height="15">
                                        <path fill="currentColor" d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"></path>
                                    </svg>
                                    {starRating}
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