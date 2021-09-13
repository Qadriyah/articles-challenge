import * as types from "../constants/article";

const initialState = {
  loading: false,
  success: false,
  error: null,
  articles: [],
};

const artcileReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ARTICLES_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case types.GET_ARTICLES_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case types.GET_ARTICLES_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        articles: action.payload,
      };

    default:
      return state;
  }
};

export default artcileReducer;
