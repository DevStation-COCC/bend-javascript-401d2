import React from 'react';
import renderer from 'react-test-renderer';
import Counter from '../../components/Counter';

describe('<Counter/> Enzyme Test', () => {
  it('is alive at application start', () => {
    // eslint-disable-next-line no-undef
    const app = shallow(<Counter/>);

    expect(app.find('.count').text()).toBe('0');
  });

  it('can count up', () => {
    // eslint-disable-next-line no-undef
    const wrapper = mount(<Counter/>);

    wrapper.find('.increment').simulate('click');
    expect(wrapper.state('counter')).toBe(1);
    wrapper.find('.increment').simulate('click');
    expect(wrapper.state('counter')).toBe(2);
  });

  it('can count down', () => {
    // eslint-disable-next-line no-undef
    const wrapper = mount(<Counter/>);

    wrapper.find('.decrement').simulate('click');
    expect(wrapper.state('counter')).toBe(-1);
    wrapper.find('.decrement').simulate('click');
    expect(wrapper.state('counter')).toBe(-2);
  });
});

describe('<Counter/> Snapshot Test', () => {
  it('renders correctly', () => {
    const component = renderer.create(<Counter/>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
