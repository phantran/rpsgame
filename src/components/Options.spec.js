import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import Options from './Options';
import configureMockStore from 'redux-mock-store';
import MainContainer from '../elements/MainContainer';

const mockStore = configureMockStore();
const store = mockStore({});

describe('Test Options Component', () => {
  let wrapper;
  beforeEach(
    () =>
      (wrapper = shallow(
        <Provider store={store}>
          <Options />
        </Provider>
      ))
  );

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });
});
