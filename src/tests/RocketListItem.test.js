import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../store';
import RocketListItem from '../components/RocketListItem';

it('matches snapshot', () => {
  const rocket = {
    id: 1,
    name: 'Falcon 9',
    images: ['image1.jpg'],
    description: 'This is a rocket',
    reserved: false,
  };
  const tree = renderer
    .create(
      <Provider store={store}>
        <RocketListItem rocket={rocket} />
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
