import React from "react";
import { shallow } from "enzyme";
import { Provider } from "react-redux";
import ConnectedPlayerVsCom, { PlayerVsCom } from "../../components/Options";
import configureMockStore from "redux-mock-store";
import { PLAYER_VS_COMPUTER } from "../../constants";

const mockStore = configureMockStore();
const store = mockStore({});
const initialState = { playMode: PLAYER_VS_COMPUTER };

describe("Test PlayerVsCom Component", () => {
  let wrapper;
  beforeEach(
    () =>
      (wrapper = shallow(
        <Provider store={store}>
          <ConnectedPlayerVsCom />
        </Provider>
      ))
  );

  it("+++ render the connected(PlayerVsCom) component", () => {
    expect(wrapper.find(ConnectedPlayerVsCom).length).toEqual(1);
  });
});
