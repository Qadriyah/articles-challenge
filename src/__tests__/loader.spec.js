import Loader from "../components/Loader";
import { findByTestAttr, setUp } from "../utils/testUtils";

describe("<Loader />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setUp({ Component: Loader, props: {}, isMount: false });
  });

  it("should render without errors", () => {
    const component = findByTestAttr(wrapper, "spinner-container");
    expect(component.length).toBe(1);
  });

  it("should render the spinner", () => {
    const spinner = findByTestAttr(wrapper, "spinner");
    expect(spinner.length).toBe(1);
  });
});
