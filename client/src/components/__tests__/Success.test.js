import { shallow } from 'enzyme';
import React from 'react';
import Success from '../Success';

describe('Snapshot for Success component', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Success />);
    expect(wrapper).toMatchSnapshot();
    // On the first run of this test, Jest will generate a snapshot file automatically.
  });
});