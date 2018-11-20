// __tests__/Intro-test.js
import React from 'react';
import EmployeeList from '../screens/EmployeeList';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<EmployeeList />).toJSON();
  expect(tree).toMatchSnapshot();
});