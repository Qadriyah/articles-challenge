import { findByTestAttr, connectedComponent } from "../utils/testUtils";
import configureStore from "../redux/store";
import App from "../App";

describe("<App />", () => {
  let wrapper;
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
  const store = configureStore({
    articles: {
      loading: false,
      success: false,
      error: null,
      articles: [],
    },
  });
  beforeEach(() => {
    fetch.resetMocks();
    wrapper = connectedComponent({
      Component: App,
      props: { store, getArticles: jest.fn() },
      isMount: true,
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("should render without errors", () => {
    fetch.mockResponseOnce(JSON.stringify(expectedresponse));
    const navBar = findByTestAttr(wrapper, "nav-bar");
    expect(navBar.length).toBe(2);

    const content = findByTestAttr(wrapper, "content-area");
    expect(content.length).toBe(1);
  });
});
