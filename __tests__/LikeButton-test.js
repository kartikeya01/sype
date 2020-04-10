import 'react-native';
import React from 'react';
import LikeButton from '@screens/app/Components/LikeButton/LikeButton';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';

test('LikeButton snapshot test', () => {
  const tree = renderer.create(<LikeButton />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('testing handleLikeClick function', () => {
  const wrapper = shallow(<LikeButton isLiked={false} />);
  const instance = wrapper.instance();
  const previousLikedValue = instance.state.isLiked;
  instance.handleLikeClick();
  const currentLikedValue = instance.state.isLiked;
  expect(currentLikedValue).toEqual(!previousLikedValue);
});