const spacexReducer = (state = { isLoading: true, spacexData: [] }, action) => {
  switch (action.type) {
    case "START_LOADING":
      return { ...state, isLoading: true };
    case "END_LOADING":
      return { ...state, isLoading: false };
    case "FETCH_ALL_DATA":
      //   console.log('postReducer', action.payload)
      return {
        ...state,
        spacexData: action.payload,
      };
    case "FILTER_DATA":
      return {
        ...state,
        spacexData: action.payload,
      };
    default:
      return state;
  }
};

export default spacexReducer;
