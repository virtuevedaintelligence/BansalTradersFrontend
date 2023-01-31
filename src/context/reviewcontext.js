import { createContext, useContext, useEffect, useReducer } from "react";
import ReviewService from "../services/ReviewService";
import reducer from "../reducer/reviewReducer";

const ReviewContext = createContext();
const initialState = {
  isLoadingReview: false,
  isError: false,
  reviews: [],
  isSaveReviewLoading: false,
  saveReview: {},
  isDeleteReviewLoading: false,
  deleteReview: {},
  isUpdateReviewLoading: false,
  updateReview: {},
};

const ReviewProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const saveReviewCall = async (review) => {
    try {
      dispatch({ type: "SAVE_REVIEW_LOADING" });
      const saveReponse = await ReviewService.saveReview(review);
      console.log(saveReponse);
      const saveReview = await saveReponse.data;
      console.log(saveReview);
      dispatch({ type: "SAVE_REVIEW_DATA", payload: saveReview });
    } catch (error) {
      console.log(error);
      dispatch({ type: "SAVE_REVIEW_ERROR" });
    }
  };

  const deleteReviewCall = async (id) => {
    dispatch({ type: "DELETE_REVIEW_LOADING" });
    try {
      const deleteReponse = await ReviewService.deleteReview(id);
      const deleteReview = await deleteReponse.data;
      dispatch({ type: "DELETE_REVIEW", payload: deleteReview });
    } catch (error) {
      console.log(error);
      dispatch({ type: "DELETE_ERROR" });
    }
  };

  const updateReviewCall = async (id, review) => {
    dispatch({ type: "UPDATE_REVIEW_LOADING" });
    try {
      const updateReponse = await ReviewService.updateReview(id, review);
      const updateReview = await updateReponse.data;
      dispatch({ type: "UPDATE_REVIEW", payload: updateReview });
    } catch (error) {
      console.log(error);
      dispatch({ type: "UPDATE_ERROR" });
    }
  };

  return (
    <ReviewContext.Provider
      value={{
        ...state,
        saveReviewCall,
        deleteReviewCall,
        updateReviewCall,
      }}
    >
      {children}
    </ReviewContext.Provider>
  );
};

//custom hook

const useReviewContext = () => {
  return useContext(ReviewContext);
};

export { ReviewProvider, ReviewContext, useReviewContext };
