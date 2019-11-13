import React from "react";
import { shallow } from "enzyme";
import { Provider } from "react-redux";
import ConnectedResult, { Result } from "../../components/Options";
import configureMockStore from "redux-mock-store";
import { PLAYER_VS_COMPUTER } from "../../constants";

const mockStore = configureMockStore();
const store = mockStore({});
const initialState = { playMode: PLAYER_VS_COMPUTER };

describe("Test Result Component", () => {
  let wrapper;
  beforeEach(
    () =>
      (wrapper = shallow(
        <Provider store={store}>
          <ConnectedResult />
        </Provider>
      ))
  );

  it("+++ render the connected(Result) component", () => {
    expect(wrapper.find(ConnectedResult).length).toEqual(1);
  });
});
