import React from "react";
import { shallow } from "enzyme";
import { Provider } from "react-redux";
import ConnectedComVsCom, { ComVsCom } from "../../components/Options";
import configureMockStore from "redux-mock-store";
import { PLAYER_VS_COMPUTER } from "../../constants";

const mockStore = configureMockStore();
const store = mockStore({});
const initialState = { playMode: PLAYER_VS_COMPUTER };

describe("Test ComVsCom Component", () => {
  let wrapper;
  beforeEach(
    () =>
      (wrapper = shallow(
        <Provider store={store}>
          <ConnectedComVsCom />
        </Provider>
      ))
  );

  it("+++ render the connected(ComVsCom) component", () => {
    expect(wrapper.find(ConnectedComVsCom).length).toEqual(1);
  });
});
