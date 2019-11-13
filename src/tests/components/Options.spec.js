import React from "react";
import { shallow } from "enzyme";
import { Provider } from "react-redux";
import ConnectedOptions, { Options } from "../../components/Options";
import configureMockStore from "redux-mock-store";
import { PLAYER_VS_COMPUTER } from "../../constants";

const mockStore = configureMockStore();
const store = mockStore({});
const initialState = { playMode: PLAYER_VS_COMPUTER };

describe("Test Options Component", () => {
  let wrapper;
  beforeEach(
    () =>
      (wrapper = shallow(
        <Provider store={store}>
          <ConnectedOptions />
        </Provider>
      ))
  );

  it("+++ render the connected(Options) component", () => {
    expect(wrapper.find(ConnectedOptions).length).toEqual(1);
  });
});
