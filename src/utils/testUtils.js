import React from "react";
import { shallow, mount } from "enzyme";
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";

import { middlewares } from "../redux/store/index";
import configureStore from "../redux/store/index";

export const setUp = ({ Component, props, isMount }) => {
  return isMount
    ? mount(<Component {...props} />)
    : shallow(<Component {...props} />);
};

export const connectedComponent = ({ Component, props, isMount }) => {
  return isMount
    ? mount(
        <Provider store={configureStore({})}>
          <Component {...props} />
        </Provider>
      )
    : shallow(<Component {...props} />)
        .childAt(0)
        .dive();
};

export const findByTestAttr = (wrapper, attr) => {
  return wrapper.find(`[data-test='${attr}']`);
};

export const findByTag = (wrapper, tag) => {
  return wrapper.find(tag);
};

export const mockStore = configureMockStore(middlewares);
