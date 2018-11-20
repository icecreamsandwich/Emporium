// __tests__/Intro-test.js
import { EmployeeDetails } from '../screens/EmployeeDetails';
import React from 'react';
import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<EmployeeDetails />).toJSON();
  expect(tree).toMatchSnapshot();
});