import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import MainScreen from '../../components/MainScreen';
import Options from '../../components/Options';
import configureMockStore from 'redux-mock-store';

const mockStore = configureMockStore();
const store = mockStore({});

describe('Test MainScreen Component', () => {
  let wrapper;
  beforeEach(
    () =>
      (wrapper = shallow(
        <Provider store={store}>
          <MainScreen />
        </Provider>
      ))
  );

  it('+++ render the connected(MainScreen) component', () => {
    expect(wrapper.find(MainScreen).length).toEqual(1)
  });
});
