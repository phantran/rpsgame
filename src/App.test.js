import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import MainScreen from './components/MainScreen';

describe('App', () => {
  let wrapper;
  beforeEach(() => (wrapper = shallow(<App />)));

  it('should render a theme provider component', () => {
    expect(wrapper.find('ThemeProvider').length).toEqual(1);
  });

  it('should render the Main Screen Component', () => {
    expect(wrapper.containsMatchingElement(<MainScreen />)).toEqual(true);
  });
});
