import * as types from "../constants/article";

/**
 * For best practices, these can be loaded from a .env file
 */
export const baseUrl = "http://api.nytimes.com/svc/mostpopular/v2/viewed";
export const apiKey = "9meWgRdnGio5LWW3ujlgCpyuGn8nJT3x";

const getArticlesRequest = (promise) => {
  return {
    type: types.GET_ARTICLES_REQUEST,
    payload: promise,
  };
};

const getArticlesFailed = (error) => {
  return {
    type: types.GET_ARTICLES_FAILED,
    payload: error,
  };
};

const getArticlesSuccess = (questions) => {
  return {
    type: types.GET_ARTICLES_SUCCESS,
    payload: questions,
  };
};

export const getArticles = (period) => {
  return (dispatch) => {
    const promise = fetch(`${baseUrl}/${period}.json?api-key=${apiKey}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    dispatch(getArticlesRequest(promise));

    promise
      .then((res) => res.json())
      .then((data) => {
        const { results } = data;
        dispatch(getArticlesSuccess(results));
      })
      .catch((error) => {
        dispatch(getArticlesFailed(error));
      });
    return promise;
  };
};
