import { getArticles } from "../redux/actions/article";
import { mockStore } from "../utils/testUtils";

describe("Redux action", () => {
  const store = mockStore({});
  const expectedresponse = {
    results: [
      {
        id: 1,
        title: "Viewed post one",
        published_date: "2021-09-10",
      },
      {
        id: 1,
        title: "Viewed post tow",
        published_date: "2021-09-11",
      },
      {
        id: 1,
        title: "Viewed post three",
        published_date: "2021-09-12",
      },
    ],
  };

  beforeEach(() => {
    fetch.resetMocks();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("should fetch data from the api", () => {
    fetch.mockResponseOnce(JSON.stringify(expectedresponse));
    return store.dispatch(getArticles(7)).then((res) => {
      expect(res.status).toEqual(200);
      expect(res.statusText).toEqual("OK");
      expect(fetch.mock.calls.length).toEqual(1);
    });
  });
});
