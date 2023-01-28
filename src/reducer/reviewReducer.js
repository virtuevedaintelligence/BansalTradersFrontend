const ReviewReducer = (state, action) => {
  switch (action.type) {
    case "REVIEW_LOADING":
      return {
        ...state,
        isLoadingReview: true,
      };
    case "SET_REVIEW_DATA":
      return {
        ...state,
        isLoadingReview: false,
        reviews: action.payload.response,
      };
    case "REVIEW_ERROR":
      return {
        ...state,
        isLoadingReview: false,
        isError: true,
      };
    case "SAVE_REVIEW_LOADING":
      return {
        ...state,
        isSaveReviewLoading: true,
      };
    case "SAVE_REVIEW_DATA":
      return {
        ...state,
        isSaveReviewLoading: false,
        saveReview: action.payload,
      };
    case "SAVE_REVIEW_ERROR":
      return {
        ...state,
        isSaveReviewLoading: false,
        isError: true,
      };
    case "DELETE_REVIEW_LOADING":
      return {
        ...state,
        isDeleteReviewLoading: true,
      };
    case "DELETE_Review":
      return {
        ...state,
        isDeleteReviewLoading: false,
        deleteReview: action.payload,
      };
    case "DELETE_ERROR":
      return {
        ...state,
        isDeleteReviewLoading: false,
        isError: true,
      };
    case "UPDATE_REVIEW_LOADING":
      return {
        ...state,
        isUpdateReviewLoading: true,
      };
    case "UPDATE_Review":
      return {
        ...state,
        isUpdateReviewLoading: false,
        updateReview: action.payload,
      };
    case "UPDATE_ERROR":
      return {
        ...state,
        isUpdateReviewLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};

export default ReviewReducer;
