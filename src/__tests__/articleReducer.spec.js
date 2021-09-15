import * as types from "../redux/constants/article";
import articleReducer from "../redux/reducers/articleReducer";
import { articles } from "../__mock__/mockData";

describe("Article Reducer", () => {
  const initialState = {
    loading: false,
    success: false,
    error: null,
    articles: [],
  };

  it("should return the default state", () => {
    const newState = articleReducer(initialState, {});
    expect(newState).toMatchObject(initialState);
  });

  it("should return new state when the request is made", () => {
    const action = {
      type: types.GET_ARTICLES_REQUEST,
      payload: {},
    };
    const newState = articleReducer(initialState, action);
    expect(newState.loading).toEqual(true);
  });

  it("should return new state when the request fails", () => {
    const action = {
      type: types.GET_ARTICLES_FAILED,
      payload: "Request failed",
    };
    const newState = articleReducer(initialState, action);
    expect(newState.loading).toEqual(false);
    expect(newState.error).toEqual("Request failed");
  });

  it("should return new state when the request successful", () => {
    const action = {
      type: types.GET_ARTICLES_SUCCESS,
      payload: articles,
    };
    const newState = articleReducer(initialState, action);
    expect(newState.loading).toEqual(false);
    expect(newState.error).toEqual(null);
    expect(newState.articles.length).toBe(2);
  });
});
