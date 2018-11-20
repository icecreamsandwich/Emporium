// __tests__/Intro-test.js
import React from 'react';
import EmployeeSkills from '../screens/EmployeeSkills';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<EmployeeSkills />).toJSON();
  expect(tree).toMatchSnapshot();
});