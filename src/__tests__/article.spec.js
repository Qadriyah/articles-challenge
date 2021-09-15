import { findByTestAttr, setUp } from "../utils/testUtils";
import Article from "../components/Article";
import { articles } from "../__mock__/mockData";

describe("<Article />", () => {
  describe("Article with media", () => {
    let wrapper;
    const onArticleClicked = jest.fn();
    beforeEach(() => {
      wrapper = setUp({
        Component: Article,
        props: { ...articles[0], onArticleClicked },
        isMount: false,
      });
    });

    it("should render without errors", () => {
      const component = findByTestAttr(wrapper, "article");
      expect(component.length).toBe(1);
    });

    it("should render the article", () => {
      const title = findByTestAttr(wrapper, "title");
      expect(title.length).toBe(1);
    });

    it("should redirect to the article page", () => {
      const component = findByTestAttr(wrapper, "article");
      component.simulate("click");
      expect(onArticleClicked).toBeCalled();
    });
  });

  describe("Article without media", () => {
    let wrapper;
    const onArticleClicked = jest.fn();
    beforeEach(() => {
      wrapper = setUp({
        Component: Article,
        props: { ...articles[1], onArticleClicked },
        isMount: false,
      });
    });

    it("should render without errors", () => {
      const component = findByTestAttr(wrapper, "article");
      expect(component.length).toBe(1);
    });

    it("should render the article", () => {
      const title = findByTestAttr(wrapper, "title");
      expect(title.length).toBe(1);
    });
  });
});
