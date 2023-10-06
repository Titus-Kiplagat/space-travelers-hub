import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Missions from '../components/Missions';
import store from '../store';

it('matches snapshot', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Missions />
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
