import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import MainScreen from './MainScreen';
import Options from './Options';
import configureMockStore from 'redux-mock-store';
import MainContainer from '../elements/MainContainer';

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
});
