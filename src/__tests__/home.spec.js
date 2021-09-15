import { findByTestAttr, connectedComponent } from "../utils/testUtils";
import Home from "../pages/Home";
import { articles } from "../__mock__/mockData";
import configureStore from "../redux/store";

describe("<Home />", () => {
  let wrapper;

  describe("Renders the articles list", () => {
    const store = configureStore({
      articles: {
        loading: false,
        success: false,
        error: null,
        articles,
      },
    });
    beforeEach(() => {
      wrapper = connectedComponent({
        Component: Home,
        props: { store },
        isMount: false,
      });
    });

    it("should render without errors", () => {
      const component = findByTestAttr(wrapper, "content-grid");
      expect(component.length).toBe(1);

      const articleList = findByTestAttr(wrapper, "article-item-0");
      expect(articleList.length).toBe(1);
    });
  });

  describe("Renders a loader", () => {
    const store = configureStore({
      articles: {
        loading: true,
        success: false,
        error: null,
        articles,
      },
    });
    beforeEach(() => {
      wrapper = connectedComponent({
        Component: Home,
        props: { store },
        isMount: false,
      });
    });

    it("should render without errors", () => {
      const component = findByTestAttr(wrapper, "loader");
      expect(component.length).toBe(1);
    });
  });

  describe("Displays a message if there are no articles", () => {
    const store = configureStore({
      articles: {
        loading: false,
        success: false,
        error: null,
        articles: [],
      },
    });
    beforeEach(() => {
      wrapper = connectedComponent({
        Component: Home,
        props: { store },
        isMount: false,
      });
    });

    it("should render without errors", () => {
      const component = findByTestAttr(wrapper, "content-grid-empty");
      expect(component.length).toBe(1);
    });
  });

  describe("Calls componentDidMount", () => {
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
        Component: Home,
        props: { store, getArticles: jest.fn() },
        isMount: false,
      });
    });

    afterEach(() => {
      jest.restoreAllMocks();
    });

    it("should render without errors", () => {
      fetch.mockResponseOnce(JSON.stringify(expectedresponse));
      wrapper.instance().componentDidMount();
      const component = findByTestAttr(wrapper, "content-grid");
      expect(component.length).toBe(1);
    });
  });
});
