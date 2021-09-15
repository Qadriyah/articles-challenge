import { findByTag, findByTestAttr, setUp } from "../utils/testUtils";
import NavBar from "../components/NavBar";

describe("<NavBar />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setUp({ Component: NavBar, props: {}, isMount: false });
  });

  it("should render without errors", () => {
    const component = findByTestAttr(wrapper, "nav-bar");
    expect(component.length).toBe(1);
  });

  it("should render the title", () => {
    const header = "<h1>Popular Articles on NY Times</h1>";
    const title = findByTag(wrapper, "h1");
    expect(title.length).toBe(1);
    expect(wrapper.html()).toContain(header);
  });
});
