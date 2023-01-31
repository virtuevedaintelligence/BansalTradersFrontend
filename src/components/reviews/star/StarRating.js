// Average Star rating for a product
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

function StarRating({ avgStarRating }) {
    const ratingStar = Array.from({ length: 5 }, (elem, index) => {
        let number = index + 0.5;
        return (
            <span key={index}>
                {avgStarRating >= index + 1 ? (
                    <FaStar className="text-warning" />
                ) : avgStarRating >= number ? (
                    <FaStarHalfAlt className="text-warning" />
                ) : (
                    <AiOutlineStar className="text-warning" />
                )}
            </span>
        );
    });
    return (
        <>
            {ratingStar}
        </>
    );
}

export default StarRating;